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

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/HisSUS77/Nexium_2.git
cd Nexium_2/assignment2
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env.local file in the root with the following:

env
Copy
Edit
# MongoDB
MONGODB_URI=mongodb+srv://<your-mongo-uri>

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
Replace placeholders with your actual credentials.

4. Run the App Locally
bash
Copy
Edit
npm run dev
Visit http://localhost:3000

📤 Deployment
This app is optimized for deployment on Vercel:

Just connect your GitHub repo

Set the same environment variables in the Vercel Dashboard under Project Settings → Environment Variables

Vercel will handle build & deploy automatically

📁 Project Structure
bash
Copy
Edit
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

📄 License
This project is private for educational purposes and is part of Assignment 2 - Nexium_2. Not licensed for redistribution or commercial use.

👨‍🎓 Author
Huzaifa Owais

