import { ConnectDB } from "@/constants/connectDB";
import { Comment } from "@/constants/models/Comment";

import { Post } from "@/constants/models/Post";
import { NextResponse } from "next/server";

// GET COMMENTS API
export async function GET(request, { params }) {
  await ConnectDB();
  try {
    const postId = params.postId;
    const post = await Post.findById({ _id: postId })
    .populate({
      path: "comments",
      populate: {
        path: "creator",
      },
    })
    .exec();

    return NextResponse.json({ message: "get all comments", post });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong!",
      error: error,
    });
  }
}
