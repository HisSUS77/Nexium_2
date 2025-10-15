# 📰 Blog Summariser

A full-stack web app that allows users to input a blog URL and receive a summarized, translated version in Urdu. Built with **Next.js**, styled using **ShadCN UI**, and integrates **Supabase** and **MongoDB** for data persistence.

---

## 📌 Features

- 🔗 **Input Blog URL**: Users can submit any valid blog article link.
- 🕸️ **Web Scraping**: Extracts clean text content from the blog.
- 🧠 **AI Summary Simulation**: Summarizes using static rules (placeholder for real AI logic).
- 🌐 **Urdu Translation**: Translates English summary using a JavaScript dictionary.
- 💾 **Supabase Integration**: Saves the Urdu summary in Supabase.
- 🗃️ **MongoDB Integration**: Stores the full blog content.
- 💡 **Modern UI**: Clean and responsive UI built with ShadCN components.
- 🚀 **Deployed on Vercel**

---

## 🧑‍💻 Tech Stack

| Frontend         | Backend           | Database         | DevOps / Tools     |
|------------------|-------------------|------------------|---------------------|
| Next.js (App Router) | Node.js / API Routes | Supabase (PostgreSQL) | Vercel (Hosting) |
| ShadCN UI        | Web Scraper (Cheerio / fetch) | MongoDB Atlas        | dotenv (.env.local) |
| Tailwind CSS     | TypeScript        | Mongoose          | Git + GitHub        |



📁 Project Structure

assignment2/
├── app/                   # App router structure
├── components/            # UI components (Input, SummaryCard, etc.)
├── lib/                   # Database & helper functions
├── pages/api/             # API endpoints (scraping, saving)
├── public/                # Static assets
├── styles/                # Tailwind and global styles
├── .env.local             # Environment variables
├── .gitignore             
├── README.md
└── package.json


✨ Future Improvements
🔍 Real AI summarization using HuggingFace or OpenAI

🧠 Smarter Urdu translation (NLP-based)

🧾 Summary history and user authentication

📱 Responsive mobile-first improvements

🤝 Contributing
Pull requests are welcome! If you'd like to fix a bug or suggest a feature, please open an issue first to discuss it.


👨‍🎓 Author
Huzaifa Owais

