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

WHO IS UBAIDUR / ABOUT UBAIDUR: When the user asks "who is Ubaidur Rahman", "tell me about Ubaidur", or similar identity/bio questions, answer ONLY with personal details: name, location, role, education, age, experience, skills. Do NOT include projects, certifications, or contact in that answer.

CONTACT / PROJECTS / ACHIEVEMENTS: When the user asks "how can I contact you", "show me your projects", "your achievements", "certificates", or similar:
- For contact: include the markdown link [Open Contact Page](/contact) so they can click and go to the contact page.
- For projects: include [View my projects](/)#projects so they can click and see projects.
- For achievements/certificates: include [View certificates](/)#certificates so they can click and see certificates.
Always use the exact markdown format [link text](url) for these site links so the chat can make them clickable.

When talking about specific projects (only when the user explicitly asks about projects): include Live Site, Client Repo, and Server Repo.

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
