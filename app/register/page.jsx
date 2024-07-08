"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image } from "lucide-react";
import { set } from "mongoose";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Register() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    // file: "",
    // password: "",
  });
  const handleRegistration = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
  };
  return (
    <div className="container px-4 pt-11 h-full">
      <div className="mt-[80px]">
      <form
        onSubmit={handleRegistration}
        className="bg-white mt-6 flex flex-col gap-4 max-w-[450px] mx-auto p-8 rounded-md shadow-md"
      >
        <h3 className='text-center text-2xl mb-4'>Welcome back</h3>
        <Input
          placeholder="Username"
          name="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        {/* <Input
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
       <div className="flex hover:bg-accent transition duration-200 mt-2 items-center justify-center p-2 rounded-md cursor-pointer">
            <label
              htmlFor="file"
              className="flex items-center cursor-pointer gap-2"
            >
              <Image className="text-blue-400" />
              <span>Media</span>
              <input
                type="file"
                id="file"
                onChange={(e) =>
                  setUser({ ...user, file: e.target.files?.[0] })
                }
                hidden
              />
            </label>
          </div> */}
        
        <Button type="submit" variant={"secondary"}>Sign up</Button>
      </form>
      </div>
    </div>
  );
}

export default Register;
