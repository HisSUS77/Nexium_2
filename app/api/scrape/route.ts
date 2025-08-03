import { NextRequest, NextResponse } from 'next/server'
import * as cheerio from 'cheerio'
import { saveFullTextToMongo, saveSummaryToSupabase } from '@/lib/database'

const HUGGINGFACE_SUMMARIZER = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn'

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json()
    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Scrape the blog content
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch blog content' }, { status: res.status })
    }

    const html = await res.text()
    const $ = cheerio.load(html)
    const paragraphs = $('p')
      .map((_, el) => $(el).text())
      .get()
      .join('\n\n')

    const cleanedText = paragraphs.trim().slice(0, 2000) // limit for free API

    // Generate summary using HuggingFace
    const hfRes = await fetch(HUGGINGFACE_SUMMARIZER, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: cleanedText }),
    })

    let summary = ''
    if (hfRes.ok) {
      const data = await hfRes.json()
      summary = data[0]?.summary_text || 'Summary not available'
    } else {
      console.warn('HuggingFace failed, falling back.')
      summary = staticSummary(cleanedText)
    }

    // Save to databases
    try {
      // Save full text to MongoDB
      const mongoResult = await saveFullTextToMongo(url, cleanedText)
      console.log('✅ Saved to MongoDB:', mongoResult._id)

      // Save summary to Supabase
      const supabaseResult = await saveSummaryToSupabase(url, summary)
      console.log('✅ Saved to Supabase:', supabaseResult)

      return NextResponse.json({ 
        fullText: cleanedText, 
        summary,
        saved: {
          mongo: mongoResult._id,
          supabase: supabaseResult
        }
      })
    } catch (dbError: any) {
      console.error('❌ Database save error:', dbError)
      
      // Still return the scraped data even if saving fails
      return NextResponse.json({ 
        fullText: cleanedText, 
        summary,
        warning: 'Content scraped successfully but failed to save to database',
        dbError: dbError.message
      })
    }

  } catch (error: any) {
    console.error('Scraping error:', error.message)
    return NextResponse.json({ error: 'Failed to scrape', detail: error.message }, { status: 500 })
  }
}

// Fallback static summary
function staticSummary(text: string): string {
  const sentences = text.split(/(?<=[.?!])\s+/)
    .filter(s => s.length > 50)
    .slice(0, 3)
  return sentences.join(' ')
}