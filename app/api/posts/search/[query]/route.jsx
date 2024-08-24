import { ConnectDB } from "@/constants/connectDB";
import { Post } from "@/constants/models/Post";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await ConnectDB();
  const { query } = params;
  try {
    const posts = await Post.find({caption: {$regex:query,$options:"i"}})

    return NextResponse.json({ data: posts });
  } catch (error) {
    return NextResponse.json({
      message: "Couldn't find search results",
      error: error,
    });
  }
}
