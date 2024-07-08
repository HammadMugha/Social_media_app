import { Info } from 'lucide-react'
import React from 'react'

export default function News() {
  return (
    <div className='bg-white h-fit hidden md:block py-3 px-3 w-[300px] border rounded-md border-gray-300'>
      <div className='flex items-center justify-between'>
        <h4>LinkedIn News</h4>
        <Info size={19}/>
      </div>
      <ul className='mt-5'>
        <li>
          <h5 className="text-[14px] font-semibold leading-[8px]">E-retailer retag health drinks</h5>
          <span className="text-[10px] font-light">4h ago - 345 readers</span>
        </li>
        <li>
          <h5 className="text-[14px] font-semibold leading-[13px]">Lets transport raises $22 million</h5>
          <span className="text-[10px] font-light">6h ago - 320 readers</span>
        </li>
        <li>
          <h5 className="text-[14px] font-semibold leading-[13px]">Total Revenue of Industries in Pakistan</h5>
          <span className="text-[10px] font-light">8h ago - 395 readers</span>
        </li>
        <li>
          <h5 className="text-[14px] font-semibold leading-[13px]">E-retailer retag health drinks</h5>
          <span className="text-[10px] font-light">1h ago - 345 readers</span>
        </li>
      </ul>
    </div>
  )
}
