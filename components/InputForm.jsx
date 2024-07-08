"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import ImageCom from "./custom/ImageCom";
import Modal from "./modals/Modal";
import { useSession } from "next-auth/react";

export default function InputForm() {
  const {data:session} = useSession();
  console.log(session)
  const [show, setShow] = useState(false);
  
  return (
    <div className="bg-white py-2 px-3 rounded-[5px]">
      <div className="flex gap-2 items-center">
        <div className="relative w-[50px] rounded-full h-[50px] object-cover">
        <ImageCom src={session?.user?.image}/>
        </div>
        <Input
          onClick={() => setShow(true)}
          placeholder="Start a post"
          className="rounded-full h-[50px] cursor-pointer hover:bg-gray-100"
        />
      </div>
      <Modal seOpen={setShow} open={show} />
      <Button className="bg-blue-500 rounded-full text-white block ml-auto mt-3">
        Post
      </Button>
    </div>
  );
}
