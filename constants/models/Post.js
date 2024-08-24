import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    caption:{
        type:String,
        required:true
    },
    postPhoto:{
        type:String,
        default:"",
    },
    likes:{
        type:[String]
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
      },
});
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);