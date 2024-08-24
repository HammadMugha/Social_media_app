import React from 'react'
import ImageCom from './custom/ImageCom'

export default function CommentBox({comment}) {
  return (
    <div className='flex gap-1'>
        <div className="">
            <ImageCom src={""}/>
        </div>
        <div className="flex p-[14px] w-full bg-[#F2F2F2] rounded-md justify-between">
            <div className="flex flex-col gap-2">
                <h4 className='text-[15px]'>{comment?.creator?.fullname}</h4>
                <p className='text-[12px]'>@Harsh12</p>
                <p className='text-[14px]'>{comment?.comment}</p>
            </div>
        </div>
    </div>
  )
}
