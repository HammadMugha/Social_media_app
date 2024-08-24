
import { ConnectDB } from "@/constants/connectDB";
import { Post } from "@/constants/models/Post";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export const POST = async (req) => {
    const path = require("path")
    const currentWorkingDirectory = process.cwd()
    
    try {
      await ConnectDB()
  
      const data = await req.formData()
  
      let postPhoto = data.get("postImg")
  
      const bytes = await postPhoto.arrayBuffer()
      const buffer = Buffer.from(bytes)
  
      const postPhotoPath = path.join(
        currentWorkingDirectory,
        "public",
        "uploads",
        postPhoto.name
      )
  
      await writeFile(postPhotoPath, buffer)
  
      postPhoto = `/uploads/${postPhoto.name}`
  
      const newPost = await Post.create({
        creator: data.get("userId"),
        caption: data.get("caption"),
        postPhoto: postPhoto
      })
  
      await newPost.save()
  
      return new Response(JSON.stringify(newPost), { status: 200 })
    } catch (err) {
      console.error(err)
      return new Response("Failed to create a new post", { status: 500 })
    }
  }