import React from "react";
import ImageCom from "./custom/ImageCom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function CommentInput({ session }) {
  const handleCommentPost = async ()=>{
    try {
       const res = await fetch("/api/comment",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify()
       })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      <div className="relative w-[40px] h-[40px] rounded-full cursor-pointer">
        <ImageCom src={session?.user?.image} />
      </div>
      <Input
        type="Add a comment"
        className="bg-[#EDF3F8] w-100 rounded-full flex-1"
        placeholder="Search"
      />
      <Button className="rounded-full" variant={"outline"}>Send</Button>
    </div>
  );
}
