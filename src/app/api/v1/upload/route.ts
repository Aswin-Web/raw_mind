import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import prisma from "@/lib/prisma";
import { readFile } from "fs/promises";
import { GoogleGenAI } from "@google/genai";
import { getResponseFromGemini } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const version = (formData.get("version") as string) || "v1";

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const original_fileName = file.name;
    const filename =
      String(Math.random() * 10000).replace(".", "__") +
      path.extname(file.name);
    const uploadDir = path.join(process.cwd(), "files/assets");

    // ✅ Ensure directory exists
    // await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);

    // ✅ Save the file
    // await writeFile(filePath, buffer);
    const textContent = buffer.toString("utf-8"); // ✅ get text
    // console.log("🚀 ~ POST ~ textContent:", textContent)

    // const data = await readFile(filePath, "utf-8");

    const uploadInfo = await prisma.fileConfig.create({
      data: {
        internal_file_name: filename,
        orignal_file_name: original_fileName,
        version: version || "none",
        raw_data: textContent,
        meaning_ful_data: await getResponseFromGemini(textContent),
      },
    });
    return NextResponse.json({
      success: true,
      file: filename,
      path: filePath,
      file_id: uploadInfo.id,
    });
  } catch (error) {
    console.error("Error occured ", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
