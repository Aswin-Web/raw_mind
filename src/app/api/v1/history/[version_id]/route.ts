import prisma from "@/lib/prisma";

export async function GET(req: Request, context: any) {
  try {
    const versionId = context.params.version_id; // this is your slug

    const history = await prisma.fileConfig.findMany({
      where: {
        version: versionId,
      },
      orderBy: {
        created_at: "desc",
      },
      select: {
        internal_file_name: true,
        orignal_file_name: true,
        id: true,
        created_at: true,
        // meaning_ful_data: true,
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
