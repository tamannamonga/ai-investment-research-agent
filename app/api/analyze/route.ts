import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { company } = await req.json();

    if (!company) {
      return NextResponse.json(
        { error: "Company name is required." },
        { status: 400 }
      );
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      messages: [
        {
          role: "system",
          content:
            "You are a professional investment analyst. Give concise and well-structured investment analysis.",
        },
        {
          role: "user",
          content: `
Analyze the company "${company}".

Return your response in this format:

## Company Overview
...

## Financial Health
...

## Strengths
- ...
- ...
- ...

## Risks
- ...
- ...

## Investment Score
X/10

## Recommendation
INVEST or PASS

## Reasoning
...
          `,
        },
      ],
    });

    const result = completion.choices[0]?.message?.content;

    console.log("Groq Response:", result);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error: any) {
    console.error("Groq Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}