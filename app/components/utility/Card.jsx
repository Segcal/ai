import React from 'react'
import CardShow from './CardShow';
import CardHero from './CardHero';
import Image from 'next/image';

export default function CardPage() {
  return (
    <main className="mt-12 px-4">
      <div className="flex px-4  flex-col text-left justify-left py-6">
        <div>
          <h1 className="md:w-[50rem] lg:w-[47rem] font-bold lg:text-6xl text-2xl py-2">
            Explore more ideas. Wade through less pages.
          </h1>
        </div>
      </div>
      {/* <article className="px-6">
        <div className="w-full flex gap-2 justify-center flex-col md:flex-row lg:flex-row">
          <main className="bg-[#efeeee] px-3 py-4 rounded-md md:w-[22rem]">
            <h4 className="font-semibold">Graph view</h4>
            <p className="py-4">
              Visualize relationships between items in your library to find
              connections.
            </p>
            <div className="flex justify-center items-center animate-pulse-slow">
              <Image
                src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697933624/unriddle_ai/graph-removebg-preview_zgkncr.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </main>
          <main className="bg-[#efeeee] px-3 py-4 rounded-md md:w-[22rem] lg:w-[37rem]">
            <h4 className="font-semibold">Chrome extension</h4>
            <p className="py-4">
              Reading on the web? Summarize any article with a single click
              using our browser extension.
            </p>
            <div className="flex justify-center items-center pt-6">
              <Image
                src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697933414/unriddle_ai/chrome_zqqyjx.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </main>
        </div>
      </article> */}
      <CardShow />
      <CardHero />
      <div className="md:py-28 py-16">
        <hr />
      </div>
      <div className="flex px-4  flex-col text-left justify-left py-6">
        <div>
          <h1 className="md:w-[50rem] lg:w-[47rem] font-bold lg:text-6xl text-2xl py-2">
            Friends of AI
          </h1>
        </div>
        <p className="text-left md:w-[48rem] pt-2 pb-12 text-xl">
          See what people are saying.
        </p>
      </div>
    </main>
  );
}
