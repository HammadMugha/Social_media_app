"use client"

import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import MenuItems from "./MenuItems";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const {data:session} = useSession();
  const handleLogin = async()=> {
    signIn("github")
  }
  return (
    <div className="bg-white fixed w-full py-3 px-3 z-10">
      <div className="max-w-[1150px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Link href={"/"}><Image src={"/logo.webp"} alt="logo" width={35} height={35} /></Link>
            <div className="md:block hidden">
              <SearchInput />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="md:block hidden">
              <MenuItems />
            </div>
            <div className="ml-2">
              {!session?.user ? (
                  <Button variant={"secondary"} onClick={()=> handleLogin()}>Get started</Button>
              ) : (
                  <Button variant={"secondary"} onClick={()=> signOut("github")}>Log out</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
