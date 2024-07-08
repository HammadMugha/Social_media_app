import React from 'react'
import Post from './Post'
import { useSession } from 'next-auth/react';

export default function Posts({posts}) {
 
  return (
    <div>
        {posts && posts.map((item,i)=>{
          return <Post post={item} key={i}/>
        })}
    </div>
  )
}
