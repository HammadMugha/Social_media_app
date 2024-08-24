import React, { useState } from "react";
import { MessageCircleMore, Repeat, Send, ThumbsUp } from "lucide-react";
import CommentInput from "./CommentInput";
export default function SocialPost({ session, post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [commentOpen, setCommentOpen] = useState(false);

  const likeOrDislikeHandler = async () => {
      if (!session.user) throw new Error(' User not athenticated');
      const tempLiked = liked;
      const tempLikes = likes;
      const dislike = likes?.filter((userId) => userId !== session.user._id);
      const like = [...(likes ?? []), session.user._id];
      const newLike = liked ? dislike : like;

      setLiked(!liked);
      setLikes(newLike);

      const res = await fetch(`/api/posts/${post._id}/${liked ? '/dislike' : '/like'}`, {
          method: 'POST',
          headers: {
              'Content-Type': "application/json"
          },
          body: JSON.stringify(session.user._id),
      });
      if (!res.ok) {
          setLiked(tempLiked);
          throw new Error('Failed to like or dislike')
      }

      //fetching All Likes
      const fetchAllLikes = await fetch(`/api/posts/${post._id}/like`);
      if (!fetchAllLikes.ok) {
          setLikes(tempLikes);
          throw new Error('Failed to fetch like');
      }

      const likeData = await fetchAllLikes.json();
      setLikes(likeData);
  }
  return (
    <div className="">
      <div className="border-b border-gray-200 px-3 p-2 mx-2">
        <span>{likes.length}</span>
      </div>
      <div className="flexBetween py-2 px-1">
        <div
          onClick={() => likeOrDislikeHandler()}
          className="px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-[#F1F5F9] transition duration-200"
        >
          <ThumbsUp className={`${liked && "fill-[#378FE9]"}`} />
          <span>Like</span>
        </div>
        <div
          onClick={() => setCommentOpen(!commentOpen)}
          className="px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-[#F1F5F9] transition duration-200"
        >
          <MessageCircleMore />
          <span>Message</span>
        </div>
        <div className="px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-[#F1F5F9] transition duration-200">
          <Repeat />
          <span>Repost</span>
        </div>
        <div className="px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer hover:bg-[#F1F5F9] transition duration-200">
          <Send />
          <span>Send</span>
        </div>
      </div>
      {/* comment box */}
      {commentOpen && <CommentInput session={session} postId={post._id} />}
    </div>
  );
}
