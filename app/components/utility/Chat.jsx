import React from 'react'
import { BsFillLockFill, BsLightningCharge, BsStars } from 'react-icons/bs'

export default function Chat() {
  return (
    <main>
      <div>
        <div className="flex gap-3 bg-gray-900 mt-4 items-center px-4 py-1 rounded-md">
          <div className="bg-gray-600 cursor-pointer  items-center px-8 rounded-md gap-4 py-4   flex">
            <div className="text-green-600">
              <BsLightningCharge size={25} />
            </div>
            <div>
              <h4 className="font-semibold">GPT-3.5</h4>
            </div>
          </div>
          <div className="items-center px-8 rounded-md gap-4 py-4 cursor-pointer  flex">
            <div className="text-gray-600">
              <BsStars size={25} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-600">GPT-4</h4>
            </div>
            <div className='text-gray-600'>
                <BsFillLockFill size={24}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
