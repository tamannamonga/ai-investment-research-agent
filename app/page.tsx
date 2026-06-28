
"use client";

import { useState } from "react";
import { Search, Building2, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const analyzeCompany = async () => {
    if (!company.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ company }),
      });

      const data = await response.json();
      setResult(data.result || data.error || "No response received.");
    } catch (error) {
      console.error(error);
      setResult("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-6 py-14">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-300">
            <Sparkles size={18} />
            AI Powered Investment Research
          </div>

          <h1 className="text-6xl font-extrabold mt-6 gradient-text">
            AI Investment Research Agent
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Enter any company name and receive an AI-generated investment
            recommendation with reasoning.
          </p>
        </div>

        <div className="glass card-hover rounded-3xl p-8 shadow-2xl fadeIn">

          <label className="flex items-center gap-2 mb-3 text-gray-300">
            <Building2 size={18} />
            Company Name
          </label>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Apple, Tesla, NVIDIA..."
              className="flex-1 rounded-xl bg-slate-800/70 border border-slate-600 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />

            <button
              onClick={analyzeCompany}
              className="rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-8 py-4 flex items-center justify-center gap-2 font-semibold shadow-lg shadow-blue-500/20"
            >
              <Search size={20} />
              {loading ? "Analyzing..." : "Analyze Company"}
            </button>
          </div>
        </div>

        <div className="glass card-hover mt-10 rounded-3xl p-8 shadow-xl fadeIn">
          <h2 className="text-3xl font-bold mb-6">
            📊 AI Investment Report
          </h2>

          <ReactMarkdown
            components={{
              h2: ({children}) => (
                <h2 className="text-2xl font-bold text-blue-400 mt-8 mb-3">
                  {children}
                </h2>
              ),
              p: ({children}) => (
                <p className="text-gray-300 leading-8 mb-3">
                  {children}
                </p>
              ),
              li: ({children}) => (
                <li className="ml-6 list-disc text-gray-300 mb-1">
                  {children}
                </li>
              ),
            }}
          >
            {result || "Your AI-generated investment report will appear here after you analyze a company."}
          </ReactMarkdown>
        </div>

        <footer className="text-center text-gray-500 mt-12">
          Built with Next.js • Groq • React Markdown
        </footer>
      </div>
    </main>
  );
}
