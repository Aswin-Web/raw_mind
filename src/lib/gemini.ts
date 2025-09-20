import { GOOGLE_API_KEY } from "@/config";
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: GOOGLE_API_KEY,
});

export const getResponseFromGemini = async (rawdata: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt(rawdata),
  });
  return response.text;
};

const prompt = (rawData: string) => `
I have the following raw text data:

${rawData}

You are an expert content formatter and UI/UX writer. Your task is to take any raw, unstructured text and convert it into a **beautifully structured, easy-to-read, and visually organized format**. 

Follow these instructions:

1. **Headings & Subheadings:** 
   - Detect main topics and use headings (e.g., # for main title, ## for subtopics).
   - Break the content into logical sections for readability.

2. **Lists & Bullets:** 
   - Convert sequences, enumerations, or points into bullet points or numbered lists.
   - Support nested lists if needed.

3. **Bold & Emphasis:** 
   - Highlight key phrases, names, dates, or statistics using bold text.

4. **Paragraphs:** 
   - Split long text into short, meaningful paragraphs.
   - Ensure smooth flow between ideas.

5. **Optional Styling Instructions (for HTML/Tailwind rendering):**
   - Headings → larger, bold text.
   - Lists → clean bullet points with indentation for nested items.
   - Paragraphs → readable spacing.
   - Maintain semantic structure for web rendering.

6. **Output format:** 
   - Use Markdown or HTML (depending on request) to preserve headings, bullets, and emphasis.

`;
