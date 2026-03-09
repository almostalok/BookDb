# BookDB

A social-first platform where reading is visible, trackable, and shareable. Think of it as a modern Goodreads — built for the social-media generation.

## Features (MVP)

- **User Authentication** — Email/password sign-up and Google OAuth
- **Book Database** — Browse, search, and filter books by genre, author, and popularity
- **Reading Tracker** — Mark books as *Want to Read*, *Reading*, *Completed*, or *Dropped*
- **Reviews & Ratings** — Write reviews and rate books
- **User Profiles** — Public profiles showing reading stats, lists, and reviews
- **Follow System** — Follow other readers and build your social reading graph
- **Activity Feed** — See what your followed readers are currently reading and reviewing

## Tech Stack

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

## Project Structure

```
BookDb/
├── client/          # Next.js frontend
├── server/          # Node.js + Express backend
└── Docs/            # Architecture, schema, and planning documents
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (e.g. [Neon](https://neon.tech) or [Supabase](https://supabase.com))

### Client (Frontend)

```bash
cd client
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

### Server (Backend)

1. Copy the environment file and fill in your values:

```bash
cd server
cp .env.example .env
```

2. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The API will be available at `http://localhost:5000` (or the port configured in `.env`).

## Documentation

Detailed documentation lives in the [`Docs/`](./Docs) folder:

- [PRD](./Docs/PRD.md) — Product Requirements Document
- [Tech Stack](./Docs/TECH_STACK.md) — Full technology breakdown
- [Architecture](./Docs/ARCHITECTURE.md) — System design overview
- [Database Schema](./Docs/DATABASE_SCHEMA.md) — Tables and relationships
- [User Flow](./Docs/USER_FLOW.md) — Page-by-page user journey
- [Development Plan](./Docs/DEVELOPMENT_PLAN.md) — Phased roadmap

## Roadmap

| Phase | Focus |
|---|---|
| Phase 1 | Repo setup, Next.js & Express scaffolding, PostgreSQL connection |
| Phase 2 | Auth, user profiles, book pages, reading tracker |
| Phase 3 | Follow system, activity feed, reviews |
| Phase 4 | Redis caching, Meilisearch integration, performance tuning |

## License

This project is currently unlicensed — all rights reserved by the author.
