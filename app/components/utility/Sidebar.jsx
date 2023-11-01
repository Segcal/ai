import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AiOutlineArrowLeft, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';
import { BsChatLeft, BsFillPersonFill, BsThreeDots } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <>
      <main className="fixed top-0 z-10 left-0 bg-gray-100 text-black h-screen w-[20rem]">
        <div className="px-3 py-4">
          <div>
            <Link href="/" className='flex gap-6 items-center'>
              <div>
                <AiOutlineMenu size={28} />
              </div>
              <div>
                <h3 className='font-semibold text-[1.1rem]'>assistant <span className='font-light'>by</span> AI</h3>
              </div>
              <div>
                <p className='text-green-800 bg-green-300 w-[3rem]  rounded-md px-2'>Beta</p>
              </div>
            </Link>
          </div>
          <div className='py-4'>
            <hr />
          </div>
          <div>
            <article className='flex items-center justify-between'>
              <Link href='/ai'>
                <AiOutlineArrowLeft size={28} className='font-bold'/>
              </Link>
              <div className='flex items-center gap-3 border border-black px-2 py-3 rounded-lg'>
                <p className='text-[1.1rem]'>New chat</p>
                <AiOutlinePlus size={28}/>
              </div>
            </article>
          </div>
          <div className='mt-4'>
            <p className='text-xl capitalize font-semibold'>chat History</p>
          </div>
          <div className="absolute bottom-2">
            <div className="pt-2 pb-4">
              <hr />
            </div>
            <Link
              href="#"
              className="flex w-full gap-4 py-3 px-3 rounded-md justify-start items-center"
            >
              <div>
                <BsFillPersonFill size={22} />
              </div>
              <div>
                <div className="w-full">
                  <p>Upgrade to Plus</p>
                </div>
              </div>
            </Link>
            {/*  */}

            <Link
              href="#"
              className="flex w-full gap-4 py-3 px-3 rounded-md justify-start items-center"
            >
              <div>
                <Image
                  src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697829457/images_vgyxhy.jpg"
                  alt=""
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <div className="w-full">
                  <p>segcal2@gmail.com</p>
                </div>
              </div>
              <div>
                <BsThreeDots size={22} />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}


