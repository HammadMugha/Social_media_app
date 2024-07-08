import mongoose from "mongoose";

let isConnected = false;
export async function ConnectDB(){
    if(isConnected){
        console.log("Mongodb already connected");
        return isConnected;
    }
    try {
        const res = await mongoose.connect("mongodb://localhost:27017/Linkedin_Clone")
        isConnected = res.connection;
        console.log("Mongodb connected.");
        return isConnected;
    } catch (error) {
        console.log(error);
    }
}
