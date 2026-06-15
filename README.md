# 📚 BookDB

> **BookDB** is a social-first reading platform where books are not just read — they are tracked, reviewed, and shared.

Think of it as a modern blend of Goodreads + social feed, designed for readers who love discovering books through people.

---

## ✨ Why BookDB?

BookDB helps readers:
- Track their reading journey
- Share reviews and ratings
- Build a public reading identity
- Follow other readers and discover their next favorite book

---

## 🚀 MVP Features

- 🔐 **Authentication** — Email/password + Google OAuth
- 🔎 **Book Discovery** — Search and browse by title, genre, author, and popularity
- 📖 **Reading Tracker** — Organize books into *Want to Read*, *Reading*, *Completed*, and *Dropped*
- ⭐ **Reviews & Ratings** — Post opinions, ratings, and reactions
- 👤 **Profiles** — Public reader profiles with stats and reading activity
- 🤝 **Follow System** — Follow readers and grow your social graph
- 📰 **Activity Feed** — Stay updated on what your network is reading and reviewing

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (React), Tailwind CSS, Shadcn/UI, Framer Motion |
| Backend | Node.js, Express.js (REST API) |
| Database | PostgreSQL (Neon / Supabase) |
| Cache | Redis (Upstash) |
| Search | Meilisearch |
| Auth | Auth.js (NextAuth) — Email + Google OAuth |
| Storage | Cloudinary (book covers / avatars) |
| Frontend Hosting | Vercel |
| Backend Hosting | Railway / Render |

---

## 🗂️ Project Structure

```text
BookDb/
├── client/   # Next.js frontend
├── server/   # Node.js + Express backend
└── Docs/     # Product, architecture, and implementation docs
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (for example [Neon](https://neon.tech) or [Supabase](https://supabase.com))

### 1) Run the Client

```bash
cd client
npm install
npm run dev
```

Client runs on: `http://localhost:3000`

### 2) Run the Server

```bash
cd server
npm install
npm run dev
```

Create or update `server/.env` with your local configuration before starting the server.

API runs on: `http://localhost:5000` (or the port configured in `.env`)

---

## 📘 Documentation

Detailed docs are available in [`Docs/`](./Docs):

- [PRD](./Docs/PRD.md) — Product requirements
- [Tech Stack](./Docs/TECH_STACK.md) — Technology choices
- [Architecture](./Docs/ARCHITECTURE.md) — System design
- [Database Schema](./Docs/DATABASE_SCHEMA.md) — Data model and relationships
- [User Flow](./Docs/USER_FLOW.md) — UX flow across the app
- [Development Plan](./Docs/DEVELOPMENT_PLAN.md) — Implementation phases

---

## 🛣️ Roadmap

| Phase | Focus |
|---|---|
| Phase 1 | Repo setup, Next.js and Express scaffolding, PostgreSQL connection |
| Phase 2 | Auth, profiles, book pages, reading tracker |
| Phase 3 | Follow system, activity feed, reviews |
| Phase 4 | Redis caching, Meilisearch integration, performance tuning |

---

## 📄 License

This project is currently **unlicensed** — all rights reserved by the author.
