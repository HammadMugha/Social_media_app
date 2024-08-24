"use client";
import Loader from "@/components/Loader";
import Posts from "@/components/Posts";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchPage() {
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  console.log(query);
  const getSearchResult = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/posts/search/${query}`);
      const data = await res.json();
      setResults(data?.data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //initial call
  useEffect(() => {
    getSearchResult();
  }, [query]);
  return loading ? (
    <Loader />
  ) : (
    <div className="max-w-[500px] mx-auto pt-[50px]">
      <div className="py-[40px]">
        {
            results ? <Posts posts={results} /> : <div className="text-center">Search not Found...</div>
        }
      </div>
    </div>
  );
}
