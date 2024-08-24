import React, { useEffect, useState } from "react";
import ImageCom from "./custom/ImageCom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import CommentBox from "./CommentBox";
import axios from "axios";

export default function CommentInput({ session,postId }) {
  const [comment,setComment] = useState("")
  const [comments,setComments] = useState([])
  const handleCommentPost = async ()=>{
    try {
       const res = await fetch("/api/comment",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postId,
          userId: session.user._id,
          comment: comment
        })
       })
       if(res.ok){
        alert("comment successfully")
       }
    } catch (error) {
      console.log(error)
    }
  }

  const getPostComments = async ()=>{
    try {
      const res = await axios.get(`/api/comment/${postId}`)
      const response = await res.data
      if(res.ok){
        alert("something")
      }
      setComments(response?.post?.comments)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getPostComments();
  },[])


  return (
    <>
    <div className="flex items-center gap-2 px-3 py-2">
      <div className="relative w-[40px] h-[40px] rounded-full cursor-pointer">
        <ImageCom src={session?.user?.image} />
      </div>
      <Input
        type="Add a comment"
        className="bg-[#EDF3F8] w-100 rounded-full flex-1"
        placeholder="Search"
        onChange={(e)=> setComment(e.target.value)}
        value={comment}
      />
      <Button onClick={()=> handleCommentPost()} className="rounded-full" variant={"outline"}>Send</Button>
    </div>
    <div className="px-3 py-3 flex flex-col gap-3">
     {
      comments.map((item,i)=>{
        return <CommentBox comment={item} key={i} />
      })
     }
    </div>
    </>
  );
}
