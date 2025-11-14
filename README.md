# Streaming Dashboard

A simple streaming dashboard application built with **Next.js**, using the **TMDB API** to display trending movies, movie details, and related information. The project follows a clean folder structure and demonstrates API integration, dynamic routing, and UI layout in Next.js.

---

## 🚀 Features

- Fetch and display **Trending Movies**
- View **Movie Details** using dynamic route: `/movie/[id]`
- TMDB API integration using environment variables
- Responsive and clean UI
- Server-side data fetching with `async` functions

---

## 🛠️ Tech Stack

- **Next.js 14+**
- **React**
- **TMDB API**
- **Tailwind CSS** (optional based on your project)
- **TypeScript** (if enabled)

---

## 📁 Folder Structure

streaming-dashboard/
├── src/
│ ├── app/
│ │ ├── movie/
│ │ │ └── [id]/
│ │ │ └── page.tsx
│ │ └── page.tsx
│ ├── components/
│ └── styles/
├── .env.local
├── package.json
├── README.md
└── AI_Report.md

---

## 🔑 Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org3
NEXT_PUBLIC_TMDB_API_KEY=YOUR_TMDB_API_KEY

Replace `YOUR_TMDB_API_KEY` with your actual TMDB key.

---

## ▶️ How to Run the Project

### **1. Install dependencies**
```sh
npm install

2. Run the development server
npm run dev

The project will start at:
http://localhost:3000

📦 Build
npm run build
npm start

🧪 Troubleshooting
"Invalid source map" Error

Delete build folders and reinstall:
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
npm install
npm run dev

✨ Author
Sala Naga Siva Vinay