"use client"
import ImageCom from '@/components/custom/ImageCom'
import { useSession } from 'next-auth/react';
import React from 'react'

export default function page() {
    const {data:session} = useSession();
  console.log(session)
  return (
    <div className='py-10 max-w-[700px] mx-auto bg-white'>
       <div className="flex flex-col items-center justify-center mt-[60px]">
       <div className="flex items-center justify-center flex-col">
        <div className="relative w-[120px] rounded-full h-[120px] object-cover">
          <ImageCom src={session?.user?.image} />
        </div>
        <h2 className="text-[25px] font-semibold">Hammad Mughal</h2>
        <p className="text-[16px]">@hammadmugha</p>
        </div>
       </div>
    </div>
  )
}
