# AI Investment Research Agent

An AI-powered web application that analyzes companies and provides investment recommendations using Groq LLM.

## Features

- AI-powered company analysis
- Investment recommendation (Invest / Pass)
- Financial health overview
- Company strengths and risks
- Modern responsive UI
- Markdown formatted reports

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Groq API
- React Markdown

## Installation

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file:

```env
GROQ_API_KEY=YOUR_API_KEY
```

## Project Structure

```
app/
│
├── api/
│   └── analyze/
│       └── route.ts
│
├── page.tsx
├── globals.css
└── layout.tsx
```

## Future Improvements

- Live stock market data
- Yahoo Finance integration
- Historical stock charts
- Company comparison