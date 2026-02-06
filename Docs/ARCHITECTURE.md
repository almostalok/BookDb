# System Architecture

## High-Level Design

Client (Next.js)
  ↓
API Routes
  ↓
Node.js + Express
  ↓
--------------------------------
PostgreSQL | Redis | Meilisearch
--------------------------------
  ↓
Cloudinary (Images)

## Backend Modules
- Auth Service
- User Service
- Book Service
- Review Service
- Feed Service
