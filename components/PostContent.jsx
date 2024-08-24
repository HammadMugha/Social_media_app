import Image from 'next/image'
import React from 'react'

export default function PostContent({post}) {
  return (
    <div className='py-4'>
        <div className='px-3'>
            <p className='mb-3'>{post?.caption}</p>
            <div className="relative w-full h-[350px] object-contain">
            <Image src={post.postPhoto} fill alt='image' className='rounded-[8px]'/>
            </div>
        </div>
    </div>
  )
}
