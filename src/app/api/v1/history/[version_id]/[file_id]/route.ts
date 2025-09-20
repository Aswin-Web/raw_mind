import prisma from "@/lib/prisma";

export async function GET(req: Request, context: any) {
  try {
    const fileId = await context.params.file_id; // this is your slug

    const history = await prisma.fileConfig.findUnique({
      where: {
        id: Number(fileId),
      },

      select: {
        internal_file_name: true,
        orignal_file_name: true,
        id: true,
        created_at: true,
        meaning_ful_data: true,
      },
    });
    // Example: fetch file from Prisma
    // const file = await prisma.file.findUnique({ where: { id: versionId } });

    return new Response(
      JSON.stringify({
        success: true,
        history,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error occurred ", error);
    return new Response(JSON.stringify({ error: "Upload failed" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
