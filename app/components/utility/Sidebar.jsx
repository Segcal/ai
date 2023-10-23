import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsChatLeft, BsFillPersonFill, BsThreeDots } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <>
      <main className="fixed top-0 z-10 left-0 bg-gray-800 text-white h-screen w-[20rem]">
        <div className="px-3 py-4">
          <Link
            href="#"
            className="flex gap-2 text-center py-3 px-3 rounded-md justify-center items-center"
          >
            <div>
              <AiOutlinePlus size={22} />
            </div>
            <div>
              <div>
                <p>New Chart</p>
              </div>
            </div>
          </Link>

          {/*  */}

          <div className="pt-12 pb-4">
            <h3>Today</h3>
          </div>
          <Link
            href="#"
            className="flex gap-4 py-3 px-3 rounded-md justify-start items-center"
          >
            <div>
              <BsChatLeft size={22} />
            </div>
            <div>
              <div>
                <p>how to route with next</p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="flex gap-4 py-3 px-3 rounded-md justify-start items-center"
          >
            <div>
              <BsChatLeft size={22} />
            </div>
            <div>
              <div>
                <p>python installation process</p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="flex w-full gap-4 py-3 px-3 rounded-md justify-start items-center"
          >
            <div>
              <BsChatLeft size={22} />
            </div>
            <div>
              <div className="w-full">
                <p>screenshot with windows</p>
              </div>
            </div>
          </Link>

          {/*  */}

          <div className="pt-8 pb-4">
            <h3>Yesterday</h3>
          </div>
          <Link
            href="#"
            className="flex gap-4 py-3 px-3 rounded-md justify-start items-center"
          >
            <div>
              <BsChatLeft size={22} />
            </div>
            <div>
              <div>
                <p>how to route with next</p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="flex gap-4 py-3 px-3 rounded-md justify-start items-center"
          >
            <div>
              <BsChatLeft size={22} />
            </div>
            <div>
              <div>
                <p>python installation process</p>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="flex w-full gap-4 py-3 px-3 rounded-md justify-start items-center"
          >
            <div>
              <BsChatLeft size={22} />
            </div>
            <div>
              <div className="w-full">
                <p>screenshot with windows</p>
              </div>
            </div>
          </Link>
          <div className="pt-2 pb-3">
            <h3>Previous 7 days</h3>
          </div>
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
      </main>
    </>
  );
}


