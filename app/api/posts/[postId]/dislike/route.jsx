import { Post } from "@/constants/models/Post";
import { NextResponse } from "next/server";

export async function POST(request){
    const {postId,userId} = await request.json();
    const post = await Post.findById({_id: postId})
    if(!post) throw new Error ("No post found")
        
    try {
        await post.updateOne({$pull:{likes: userId}})
        return NextResponse.json({success:true,message:"post dislike successfully"})
    } catch (error) {
        return NextResponse.json({error:'An error occurred.'});
    }
}