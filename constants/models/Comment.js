import mongoose from "mongoose";


const commentShema = new mongoose.Schema({
    comment:{
        type: String,
        required: true
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

export const Comment = mongoose.models?.Comment || mongoose.model("Comment", commentShema);