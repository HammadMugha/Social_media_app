"use client"
import Image from "next/image";
import React from "react";
import ImageCom from "./custom/ImageCom";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const {data:session} = useSession();
  console.log(session)
  return (
    <div className="hidden h-fit border-gray-300 border rounded-md md:flex flex-col w-[240px] bg-white">
      <div className="">
        <Image
          src={"/banner.webp"}
          width={200}
          height={200}
          className="w-full h-[60px] rounded-tr-[5px] rounded-tl-[5px]"
        />
      </div>
      <div className="mt-[-20px] flex flex-col items-center justify-center pb-3">
        <Link href={'/profile'} className="flex items-center justify-center flex-col">
        <div className="relative w-[50px] rounded-full h-[50px] object-cover">
          <ImageCom src={session?.user?.image} />
        </div>
        <h2 className="text-[16px] font-semibold">Hammad Mughal</h2>
        <p className="text-[12px]">@hammadmugha</p>
        </Link>
      </div>
    </div>
  );
}
