import { ConnectDB } from "@/constants/connectDB";
import { Comment } from "@/constants/models/Comment";

import { Post } from "@/constants/models/Post";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await ConnectDB();
    const { userId, comment, postId } = await request.json();
    const post = await Post.findById({ _id: postId });
        if (!post) throw new Error('Post not found');
    console.log(userId, comment, postId);
    const CommentCreate = await Comment.create({ comment, creator: userId });

    post.comments?.push(CommentCreate._id);

    await post.save();
    return NextResponse.json({
      message: "comment created successfully",
    });
  } catch (error) {
    return NextResponse({ error: error, message: "something went wrong" });
  }
}