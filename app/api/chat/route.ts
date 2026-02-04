import { knowledgeBase } from "@/app/web/data/knowledge";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid request format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // On Vercel: add GEMINI_API_KEY in Project → Settings → Environment Variables
    const apiKey =
      process.env.GEMINI_API_KEY ?? process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error:
            "No Gemini API key configured. Set GEMINI_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY in Vercel Environment Variables.",
        }),
        {
          status: 503,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const google = createGoogleGenerativeAI({ apiKey });

    const result = streamText({
      model: google("gemini-2.5-flash-lite"),
      // model: google("gemini-2.5-flash"),
      system: `
You are Ubaidur Rahman's AI portfolio assistant.

RULES:
- Answer ONLY using the information below.
- If the answer is not present, say: "I don't have that information."
- Be friendly, medium-length, and professional.

WHO IS UBAIDUR / ABOUT UBAIDUR: When the user asks "who is Ubaidur Rahman", "tell me about Ubaidur", or similar identity/bio questions, answer ONLY with personal details: name, location, role, education, age, experience, skills. Do NOT include projects, Currently learning, certifications, or contact in that answer.

LINKS—NEVER RAW URLS: Never output raw URLs (e.g. https://...). Always use markdown links [label](url) so the user sees a link and can click to redirect.

PROJECTS: When the user asks about a project (e.g. "show me your biggest project", "your best project", "show me your projects"), describe the project briefly and give ONLY these three clickable links: [Live link](url), [Client side](url), [Server side](url). Use the exact markdown from the project data. Do not paste raw URLs.

CONTACT: When the user asks about contact, give ONLY the markdown links from CONTACT INFORMATION (Email, Phone, WhatsApp, GitHub, LinkedIn, Open Contact Page). Do not paste raw URLs.

CERTIFICATES / ACHIEVEMENTS: When the user asks about certificates or achievements, give a short answer and use [View certificates](/)#certificates plus the certificate markdown links (e.g. [Programming Hero Certificate](/programminghero.pdf)). Do not paste raw URLs.

DATA:
${knowledgeBase}
      `.trim(),
      messages: await convertToModelMessages(messages),
      temperature: 0.2,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);

    return new Response(
      JSON.stringify({
        error: "An error occurred while generating a response. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
