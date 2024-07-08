import React from 'react'

export default function Popup({}) {
  return (
    <div className='flex fixed inset-0 w-full z-10 items-center justify-center min-h-screen'>
        <div className="max-w-[500px] mx-auto bg-white p-4 h-[400px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quas eligendi cum illum reprehenderit neque earum, aut a totam voluptatibus.
        </div>
        {/* bg light */}
        <div className='w-full h-screen bg-black/50'></div>
    </div>
  )
}
