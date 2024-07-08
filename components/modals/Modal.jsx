import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Image } from "lucide-react";
import { createPostAction } from "@/lib/actions/PostActions";
import { useSession } from "next-auth/react";
import Loader from "../Loader";

export default function Modal({ setOpen, open }) {
  const { data: session } = useSession();
  const [field, setField] = useState("");
  const [photo, setPhoto] = useState("");
  const [imageUrl,setImageUrl] = useState("");
  // const [loading, setLoading] = useState(true);

  //post action function
  const postAction = async(formdata)=>{
    if (!session?.user) throw new Error("user not authenticated");

    try {
      const data = new FormData();
      data.append("postImg",imageUrl)
      console.log(imageUrl);
      data.append("text",field)
      await createPostAction(data,session.user._id)
      // setLoading(false)
    } catch (error) {
      console.log('error occurred', error);
    }
    setField("");

    // setOpen(false);
  }

  
  const handleImageChange = (e) => {
    setImageUrl(e.target.files[0])
     console.log(imageUrl);
  }

  return (
      <Dialog
        open={open}
        className="max-w-[450px]"
      >
        <DialogContent onInteractiveOutside={()=> setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </DialogHeader>
          <div className="mt-3">
            <form action={(formdata)=> postAction(formdata)}>
              <textarea
                value={field}
                onChange={(e)=> setField(e.target.value)}
                name="text"
                id=""
                placeholder="What's Happening?"
                className="outline-none border w-full border-gray-300 p-3 cursor-pointer min-h-[120px]"
              ></textarea>
              <Button className="bg-blue-500 rounded-full text-white block ml-auto mt-3">
                Post
              </Button>
              {imageUrl && 
                <Image src={imageUrl} width={400} height={400}/>
                }
              <div className="flex hover:bg-accent transition duration-200 mt-2 items-center justify-center p-2 rounded-md cursor-pointer">
                <label
                  htmlFor="file"
                  className="flex items-center cursor-pointer gap-2"
                >
                  <Image className="text-blue-400" />
                  <span>Media</span>
                  <input type="file" id="file" onChange={(e)=> handleImageChange(e)} hidden />
                </label>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
  );
}
