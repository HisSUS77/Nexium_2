// app/api/save-blog/route.ts
import { NextResponse } from "next/server"
import { saveFullTextToMongo, saveSummaryToSupabase } from "@/lib/database"

export async function POST(request: Request) {
  try {
    const { url, content, summary } = await request.json()

    if (!url || !content || !summary) {
      return NextResponse.json({ 
        success: false, 
        error: "Missing required fields: url, content, summary" 
      }, { status: 400 })
    }

    // Save full text to MongoDB
    const mongoResult = await saveFullTextToMongo(url, content)
    console.log("Saved to MongoDB:", mongoResult._id)

    // Save summary to Supabase
    const supabaseResult = await saveSummaryToSupabase(url, summary)
    console.log("Saved to Supabase:", supabaseResult)

    return NextResponse.json({ 
      success: true, 
      mongo: mongoResult,
      supabase: supabaseResult
    })
    
  } catch (error: any) {
    console.error("Error in save-blog:", error)
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
}