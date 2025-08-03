import { NextResponse } from "next/server"
import { saveSummaryToSupabase } from "@/lib/database"

export async function GET() {
  try {
    const testUrl = "https://example.com/blog-post"
    const testSummary = "This is a test summary of a blog post for Supabase storage."

    const result = await saveSummaryToSupabase(testUrl, testSummary)
    return NextResponse.json({ success: true, saved: result })
  } catch (error: any) {
    console.error("Error saving to Supabase:", error)
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      details: error 
    }, { status: 500 })
  }
}