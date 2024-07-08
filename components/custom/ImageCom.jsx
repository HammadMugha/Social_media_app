import Image from 'next/image'
import React from 'react'

export default function ImageCom({src}) {
  return (
    <div>
        <Image 
        src={src}
        alt='Image'
        fill
        className='rounded-full object-cover'
        />
    </div>
  )
}
