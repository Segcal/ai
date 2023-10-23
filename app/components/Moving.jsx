import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import MovingNext from './MovingNext';
import Marquee from "react-fast-marquee";
import Image from 'next/image';

export default function Moving() {
  return (
    <main className="mt-8">
      <Marquee pauseOnHover direction='right'>
        <div className="flex gap-2 text-[1rem] lg:flex-row">
          <article className="border border-gray-500 rounded-md  hover:bg-gray-300 duration-200 ease-in hover:opacity-60">
            <div className="px-6 py-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image
                    src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894279/unriddle_ai/72_kvl49o.jpg"
                    alt=""
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                  <div>
                    <h3>Jane Doe</h3>
                    <small className="text-gray-500">@janedoe</small>
                  </div>
                </div>
                <div>
                  <FaTwitter className="text-blue-500" size={30} />
                </div>
              </div>
              <p className="py-4 w-[25rem] text-[0.9rem]">
                If you read PDFs at all for work or research, you should really
                try out @unriddle_ai. It's excellent. I'm in awe of the product,
                I think you'll be too.
              </p>
            </div>
          </article>

          {/*  */}

          <article className="border border-gray-500 rounded-md hover:bg-gray-300 duration-200 ease-in hover:opacity-60">
            <div className="px-6 py-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image
                    src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894279/unriddle_ai/72_kvl49o.jpg"
                    alt=""
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                  <div>
                    <h3>Jane Doe</h3>
                    <small className="text-gray-500">@janedoe</small>
                  </div>
                </div>
                <div>
                  <FaTwitter className="text-blue-500" size={30} />
                </div>
              </div>
              <p className="py-4 w-[25rem] text-[0.9rem]">
                If you read PDFs at all for work or research, you should really
                try out @unriddle_ai. It's excellent. I'm in awe of the product,
                I think you'll be too.
              </p>
            </div>
          </article>

          {/*  */}

          <article className="border border-gray-500 rounded-md hover:bg-gray-300 duration-200 ease-in hover:opacity-60">
            <div className="px-6 py-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image
                    src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894279/unriddle_ai/72_kvl49o.jpg"
                    alt=""
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                  <div>
                    <h3>Jane Doe</h3>
                    <small className="text-gray-500">@janedoe</small>
                  </div>
                </div>
                <div>
                  <FaTwitter className="text-blue-500" size={30} />
                </div>
              </div>
              <p className="py-4 w-[25rem] text-[0.9rem]">
                If you read PDFs at all for work or research, you should really
                try out @unriddle_ai. It's excellent. I'm in awe of the product,
                I think you'll be too.
              </p>
            </div>
          </article>

          {/*  */}

          <article className="border border-gray-500 rounded-md hover:bg-gray-300 duration-200 ease-in hover:opacity-60">
            <div className="px-6 py-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <Image
                    src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894279/unriddle_ai/72_kvl49o.jpg"
                    alt=""
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                  <div>
                    <h3>Jane Doe</h3>
                    <small className="text-gray-500">@janedoe</small>
                  </div>
                </div>
                <div>
                  <FaTwitter className="text-blue-500" size={30} />
                </div>
              </div>
              <p className="py-4 w-[25rem] text-[0.9rem]">
                If you read PDFs at all for work or research, you should really
                try out @unriddle_ai. It's excellent. I'm in awe of the product,
                I think you'll be too.
              </p>
            </div>
          </article>
        </div>
      </Marquee>
      <MovingNext />
    </main>
  );
}
