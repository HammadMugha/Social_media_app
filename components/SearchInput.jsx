import React, { useState } from 'react'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation';

export default function SearchInput() {
  const router = useRouter();
  const [query,setQuery] = useState("");
  const handleSearch = (e)=>{
    if(e.key == "Enter"){
       router.push(`/search/${query}`)
    }
  }
  return (
    <Input type="email"
    className="bg-[#EDF3F8] w-80"
    placeholder="Search"
    onChange={(e)=> setQuery(e.target.value)}
    onKeyUp={(e)=> handleSearch(e)}
    // value={query}
    />
  )
}
