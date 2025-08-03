// models/BlogFullText.ts
import mongoose from "mongoose"

const BlogFullTextSchema = new mongoose.Schema({
  url: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const BlogFullText =
  mongoose.models.BlogFullText || mongoose.model("BlogFullText", BlogFullTextSchema)

export default BlogFullText
