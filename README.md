# AI Investment Research Agent

An AI-powered investment research web application that analyzes companies and generates investment recommendations using the Groq LLM. The application provides an easy-to-understand report highlighting a company's strengths, risks, financial outlook, and an overall investment recommendation.

---

# 🚀 Live Demo

https://ai-investment-research-agent-a4svrdg6b-tamanna4.vercel.app/

# 📂 GitHub Repository

https://github.com/tamannamonga/ai-investment-research-agent

---

# Overview

The AI Investment Research Agent helps users quickly evaluate a company for investment purposes. Instead of manually researching financial reports, users simply enter a company name, and the application generates an AI-powered investment report.

The report includes:

- Company Overview
- Financial Health
- Key Strengths
- Potential Risks
- Investment Recommendation (Invest / Pass)

---

# Features

- AI-powered company analysis
- Investment recommendation (Invest / Pass)
- Financial health overview
- Company strengths and risks
- Clean and responsive UI
- Markdown formatted AI reports

---

# Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Groq API
- React Markdown
- Vercel

---

# How to Run

## 1. Clone the repository

```bash
git clone https://github.com/tamannamonga/ai-investment-research-agent.git
```

## 2. Move into the project

```bash
cd ai-investment-research-agent
```

## 3. Install dependencies

```bash
npm install
```

## 4. Create a `.env.local` file

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

## 5. Start the development server

```bash
npm run dev
```

The application will run locally at:

```
http://localhost:3000
```

---

# How It Works

1. The user enters the name of a company.
2. The frontend sends the request to a Next.js API route.
3. The backend creates a prompt for the Groq Large Language Model.
4. Groq analyzes the company and generates an investment report.
5. The response is returned in Markdown format.
6. React Markdown renders the formatted report on the webpage.

---

# Project Structure

```
app/
│
├── api/
│   └── analyze/
│       └── route.ts
│
├── globals.css
├── layout.tsx
└── page.tsx
```

---

# Key Decisions & Trade-offs

- Used Groq LLM because of its fast response time and easy API integration.
- Chose Next.js API Routes instead of a separate backend to simplify deployment.
- Focused on AI-generated qualitative analysis rather than integrating live stock market APIs.
- Prioritized simplicity and usability over adding complex features such as authentication and database storage.

---

# Example Runs

## Example 1

**Input**

```
Apple
```

**Output**

- Recommendation: Invest
- Strong financial performance
- Strong ecosystem
- Stable long-term growth
- Risks include increasing competition and market saturation

---

## Example 2

**Input**

```
Tesla
```

**Output**

- Recommendation: Pass
- Strong innovation
- EV market leadership
- High valuation
- Risks include market volatility and intense competition

---

# What I Would Improve with More Time

- Integrate live stock market APIs
- Display historical stock price charts
- Compare multiple companies
- Add portfolio tracking
- Integrate financial news
- Improve prompt engineering for more detailed investment analysis

---

# Future Improvements

- User authentication
- Search history
- Export reports as PDF
- Better UI and animations
- Company comparison dashboard

---

# Author

**Tamanna Monga**

GitHub:
https://github.com/tamannamonga