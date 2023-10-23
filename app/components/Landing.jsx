import Link from 'next/link';
import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

export default function Landing() {
  return (
    <main className="lg:px-48 my-20">
      <div className="flex md:px-28 flex-col justify-center items-center text-center ">
        <h1 className="capitalize font-bold lg:text-6xl text-4xl py-2">
          Join our creator program and earn up to 50% commission
        </h1>
        <p className="my-2 px-6 md:text-xl">
          As an AI creator, you’ll share AI with your audience, earn
          commission on sales and get access to the platform.
        </p>
        <div className="flex hover:bg-gray-400 items-center gap-2  hover:bg-opacity-40 duration-200 ease-in-out px-2 py-1 rounded-md capitalize">
          <Link href="https://unriddle.notion.site/Join-Unriddle-s-Affiliate-Program-dacd4df4db0e486c888214055dbce66d">
            Learn more
          </Link>
          <Link href="https://unriddle.notion.site/Join-Unriddle-s-Affiliate-Program-dacd4df4db0e486c888214055dbce66d">
            <BsArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}
