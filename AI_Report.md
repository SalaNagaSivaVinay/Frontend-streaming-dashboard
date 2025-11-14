✅ AI_Report.md (Final Submission Document)

# AI Usage Report – Streaming Dashboard

This report describes the AI tools used during the development of the Streaming Dashboard project, the specific parts of the code or configuration where AI assistance was heavily involved, and the final deployment details.

---

## 1. AI Tools Used

During this project, I used the following AI tools:

### **1. ChatGPT (OpenAI)**
Used for:
- Guidance on resolving build and environment variable errors.
- Help in understanding Next.js dynamic routing.
- Suggestions for structuring API functions.
- Fixing issues related to `.env.local`, Vercel variables, and the “Invalid source map” error.
- Documentation editing and polishing (README.md, this AI_Report.md).

### **2. GitHub Copilot (if applicable)**
*(If you did not use Copilot, you can remove this section)*

Used for:
- Auto-completing React component structure.
- Suggesting Tailwind utility classes.
- Minor fixes in TypeScript types (if enabled).

---

## 2. Parts of the Project Where AI Was Heavily Used

AI assistance was specifically used in the following project areas:

### **a) Tailwind CSS Styling**
AI helped by:
- Suggesting responsive utility classes.
- Helping create consistent card layouts.
- Providing structure for movie grid UI.

### **b) Complex Utility Functions**
AI gave suggestions for:
- TMDB API fetch functions
- Error handling patterns:
  ```js
  if (!res.ok) {
    throw new Error("Failed to fetch...");
  }

  Structuring reusable API helpers (like getTrendingMovies())

c) Environment & Configuration Setup

AI guidance was used for:

Correct .env.local setup

Fixing NEXT_PUBLIC_ variable issues

Vercel environment variable configuration steps

Clearing corrupted .next folder and reinstalling dependencies

Handling Turbopack build warnings/errors

d) Documentation

AI created:

README.md initial structure

This full AI_Report.md

Troubleshooting section for source-map issues

All documentation was later reviewed and edited manually.

3. Deployment Details

✔️ Vercel Live URL

https://frontend-streaming-dashboard.vercel.app/

✔️ GitHub Repository

https://github.com/SalaNagaSivaVinay/Frontend-streaming-dashboard.git

4. Final Notes

Core coding logic (routing, fetch functions, page components) was implemented manually.

AI was used mainly for debugging, structuring code, and documentation clarity.

All environment variables were securely added through Vercel → Project → Settings → Environment Variables.

Submitted by:
Sala Naga Siva Vinay
