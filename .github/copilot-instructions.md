# Project Rules v1.0 - Chamber Brief Bank
# Date: October 2026

## Project Goal
- Web-based document library for legal briefs, filings, and court documents.
- Features role-based permissions: Counsels (view/download), Director of Litigation (upload/manage).

## Tech Stack Constraints
- Frontend: Vite + React + CSS (Mobile-friendly, dark/light legal aesthetics).
- Backend / Storage: Supabase (Auth, Postgres DB for document metadata, Blob Storage for PDFs/docs).

## Code Style & Safety
- Keep UI clean, accessible, and fast on mobile screens.
- DO NOT hardcode Supabase API keys or passwords directly in source code; use `.env.local`.
- Write modular, readable code with clean comments.