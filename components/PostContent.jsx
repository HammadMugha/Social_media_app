import React from 'react'

export default function PostContent({post}) {
  return (
    <div className='py-4'>
        <div className='px-3'>
            <p>{post?.text}</p>
        </div>
    </div>
  )
}
