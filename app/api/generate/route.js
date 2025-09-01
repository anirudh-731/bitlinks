import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json(
        { success: false, error: true, message: "URL already exists" },
        { status: 400 }
      );
    }

    // Insert new URL
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json(
      { success: true, error: false, message: "URL generated successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("API /generate error:", error);

    // Always return JSON, even on error
    return Response.json(
      {
        success: false,
        error: true,
        message: "Internal server error",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
