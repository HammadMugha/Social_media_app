"use client";
import React from "react";
import ImageCom from "./custom/ImageCom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Delete, Trash, Trash2 } from "lucide-react";
import PostContent from "./PostContent";
import SocialPost from "./SocialPost";
import { useSession } from "next-auth/react";
import { deletePostAction } from "@/lib/actions/PostActions";

export default function Post({ post }) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="bg-white flex flex-col my-2">
      <div className="flex justify-between items-center px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <div className="relative h-[40px] w-[40px] rounded-full">
              <ImageCom src={session?.user.image} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-[16px] font-semibold">
                  {session?.user?.name}
                </h3>
                <Badge variant="secondary">You</Badge>
              </div>
              <p className="text-[10px] text-gray-400">
                @{session?.user?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          {session?.user && (
            <Button onClick={()=> deletePostAction(post?._id,session?.user._id)} variant={"secondary"} className={"rounded-full"}>
              <Trash2 size={20} />
            </Button>
          )}
        </div>
      </div>
      <PostContent post={post} />
      <SocialPost session={session} post={post} />
    </div>
  );
}
