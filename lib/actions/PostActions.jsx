"use server";
import { ConnectDB } from "@/constants/connectDB";
import { Post } from "@/constants/models/Post";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
// import {cloudinary} from 'cloudinary';
//   // Configuration
//   cloudinary.config({
//     cloud_name: "dspstpbyw",
//     api_key: "911436661276358",
//     api_secret: "<your_api_secret>" // Click 'View Credentials' below to copy your API secret
// });

//GET actions
export async function getAllPosts() {
  await ConnectDB();
  try {
    const Posts = await Post.find();
    if (!Posts) throw new Error("No Posts found");

    return JSON.parse(JSON.stringify(Posts));
  } catch (error) {
    // throw new Error("Error", error);
    console.log(error);
  }
}
//POST actions
export async function createPostAction(formData, userId) {
  const path = require("path")
  const currentWorkingDirectory = process.cwd()
  
  try {
    await ConnectDB()

    let postPhoto = formData.get("postPhoto")

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
      creator: userId,
      caption: formData.get("text"),
      postPhoto: postPhoto
    })

    await newPost.save()

    return NextResponse({message: "new post created successfully",status: 201})
  } catch (err) {
    console.error(err)
    return NextResponse({message: "Failed to create a new post",status: 500})
  }
}


//delete POST action
export async function deletePostAction(postId, userId) {
  await ConnectDB();
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found.");
  // if (post.creator !== userId){
  //   throw new Error("you are not owner of this post")
  // }
    
  try {
    await Post.deleteOne({ _id: postId });
    revalidatePath("/");
  } catch (error) {
    throw new Error("Error an accured", error);
  }
}
