import React from 'react'
import Image from 'next/image';

export default function EasyCover() {
  return (
    <main className="mt-12 px-4">
      <div className="flex px-4  flex-col text-left justify-left py-6">
        <div>
          <h1 className="md:w-[50rem] lg:w-[47rem] font-bold lg:text-6xl text-2xl py-2">
            Easily write ,
            <span className="bg-[#DEECDD] px-3 rounded-full py-2"> city </span>
            and uncover hidden themes.{" "}
          </h1>
        </div>
        <p className="text-left md:w-[48rem] pt-6 pb-12 text-xl">
          Highlight text and Unriddle will show you the most relevant sources
          from your library. Never loose a citation again
        </p>
      </div>
      {/* <article className="px-6">
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697932373/unriddle_ai/easy_Image_qehds3.png"
          alt=""
          className=""
          width={200}
          height={200}
        />
      </article> */}
      <div className="md:py-28 py-16">
        <hr />
      </div>
    </main>
  );
}
