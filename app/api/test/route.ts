// app/api/test-save/route.ts
import { NextResponse } from "next/server"
import { saveFullTextToMongo } from "@/lib/database"

export async function GET() {
  try {
    const testUrl = "https://example.com"
    const testContent = "This is a test blog content to save in MongoDB."

    const result = await saveFullTextToMongo(testUrl, testContent)
    return NextResponse.json({ success: true, saved: result })
  } catch (error: any) {
    console.error("Error saving to MongoDB:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
