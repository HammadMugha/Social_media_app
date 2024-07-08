"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function LoginPage() {
    const {data:session,status: sessionStatus} = useSession();
  const router = useRouter();


  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/");
    }
    console.log(session);
  }, [sessionStatus, router]);

  const handleLogin = async(e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await signIn("credientals",{
       redirect:false,
       email,password
    })
    console.log(res);
    if(res?.error){
     if(res?.url){
      router.push("/")
     }
    //  toast.error("Invalid Credientals");
    }else{
    //  toast.success("Successfully Logged In.");
    }
    }
  return (
    <div className="container px-4 pt-11 h-full">
      <div className="mt-[80px]">
        <form
          onSubmit={handleLogin}
          className="bg-white mt-6 flex flex-col gap-4 max-w-[450px] mx-auto p-8 rounded-md shadow-md"
        >
          <h3 className="text-center text-2xl mb-4">Welcome back</h3>
          <Input
            placeholder="Email"
            name="email"
            //   value={user.email}
            //   onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            name="password"
            //   value={user.password}
            //   onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button type="submit" variant={"secondary"}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
