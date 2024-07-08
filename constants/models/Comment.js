import mongoose from "mongoose";


const commentShema = mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    user:{
        userId:{
            type:String,
            required:true
        },
        profilePhoto:{
            type:String,
            required:true
        },
        firstName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    },
},{timestamps:true})

const Comment = mongoose.models.Comment || mongoose.model("Comment",commentShema)

export default Comment