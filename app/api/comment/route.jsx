import Comment from "@/constants/models/Comment";
import { Post } from "@/constants/models/Post";

export async function POST(request) {
  const { postId, commentText, user } = await request.json();
  if (!commentText) throw new Error("comment text is required");
  const userLogin = {
    userId: user.uid,
    profilePhoto: user.image,
    firstName: user.name,
    email: user.email,
  };
  const post = await Post.findById({ _id: postId });
  if (!post) throw new Error("No post found");

  try {
    const comment = await Comment.create({
      text: commentText,
      user: userLogin,
    });

    post.comments.push(comment._id);
    await post.save();
  } catch (error) {
    return NextResponse.json({ error: "An error occurred." });
  }
}

//GET COMMENTS API
export async function GET(request) {
  try {
    const { postId } = await request.json();
    const post = await Post.findById({ _id: postId });
    if (!post) throw new Error("No post found");

    const comments = await post.populate({
        path: "comments",
        options: {sort: {createdAt: -1} },
      });

      return NextResponse.json({data:comments})
  } catch (error) {
    return NextResponse.json({ error: "An error occurred." });
  }
}
