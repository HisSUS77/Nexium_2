// lib/database.ts
import { connectToMongo } from "./mongodb"
import BlogFullText from "@/app/model/BlogFullText"

// lib/database.ts (continued)
import { createClient } from "@supabase/supabase-js"


export async function saveFullTextToMongo(url: string, content: string) {
  await connectToMongo()
  const saved = await BlogFullText.create({ url, content })
  return saved
}


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function saveSummaryToSupabase(url: string, summary: string) {
  const { data, error } = await supabase
    .from("summaries")
    .insert([{ url, summary }])

  if (error) throw error
  return data
}
