import React from 'react'
import InputForm from './InputForm'
import Posts from './Posts'
import { getAllPosts } from '@/lib/actions/PostActions'

export default async function Feeds() {
  const posts = await getAllPosts();
  return (
    <div className='flex-1'>
      {/* input form */}
      <InputForm />
      {/* input form */}
      <Posts posts={posts}/>
      {/* input form */}
    </div>
  )
}
