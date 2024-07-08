import { ConnectDB } from "@/constants/connectDB";
import { Post } from "@/constants/models/Post";
import { NextResponse } from "next/server";

//GET LIKES API
export async function GET({params}) {
  await ConnectDB();
  // const {postId} = request.json();
  const post = await Post.findById({ _id: params.postId })
  if (!post) return NextResponse.json({ error: "Post not found." });
  try {
    return NextResponse.json(post.likes)
  } catch (error) {
    return NextResponse.json({ error: "An error occurred." });
  }
}

//POST LIKES API
export async function POST(request,{params}) {
  try {
    await ConnectDB();
    const { userId } = await request.json();
    const post = await Post.findById({ _id: params.postId });
    if (!post) return NextResponse.json({ message: "Post not found." });
    await post.updateOne({ $addToSet: { likes: userId } });
    return NextResponse.json({
      success: true,
      message: "post like successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred." });
  }
}
