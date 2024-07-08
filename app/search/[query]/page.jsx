"use client"
import Loader from '@/components/Loader';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SearchPage() {
    const {query} = useParams();
    const [loading,setLoading] = useState(false);
    const [results,setResults] = useState([]);
    console.log(query);
    const getSearchResult = async ()=>{
        try {
            setLoading(true)
            const res = await fetch(`/api/posts/${query}/search`)
            const data = await res.json();
            setResults(data)
            console.log(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    //initial call
    useEffect(()=>{
        getSearchResult();
    },[query])
  return loading ? <Loader /> : (
    <div>SearchPage</div>
  )
}
