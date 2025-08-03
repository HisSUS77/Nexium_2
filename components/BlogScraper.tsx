'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { translateToUrdu } from '@/lib/utils'

export default function BlogScraper() {
  const [url, setUrl] = useState('')
  const [summary, setSummary] = useState('')
  const [summaryUrdu, setSummaryUrdu] = useState('')
  const [fullText, setFullText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleScrape = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })

     const text = await response.text()

try {
  const data = JSON.parse(text)

  if (!response.ok) {
    throw new Error(data.error || 'Scraping failed')
  }
  
  setSummary(data.summary)
  setSummaryUrdu(translateToUrdu(data.summary))
 
  setFullText(data.fullText)
} catch (err) {
  console.error('Invalid JSON:', text)
  throw new Error('Invalid JSON response from server')
}
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto my-8">
      <CardHeader>
        <CardTitle>Blog Scraper</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Enter blog URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={handleScrape} disabled={loading}>
          {loading ? 'Scraping...' : 'Scrape Blog'}
        </Button>

        {error && <p className="text-red-500">{error}</p>}

       {summary && (
  <div className="space-y-4 mt-6">
    <div>
      <h3 className="text-lg font-semibold">English Summary</h3>
      <Textarea readOnly value={summary} className="bg-muted" />
    </div>

    <div>
      <h3 className="text-lg font-semibold">Urdu Summary</h3>
      <Textarea readOnly value={summaryUrdu} className="bg-muted font-[Jameel Noori Nastaleeq]" dir="rtl" />
    </div>
  </div>
)}

        {fullText && (
          <div>
            <h3 className="font-semibold text-lg mt-4">Full Blog Text:</h3>
            <Textarea value={fullText} rows={10} readOnly />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
