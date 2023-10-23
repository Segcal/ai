import React from 'react'
import Image from 'next/image';

export default function Sections() {
  return (
    <main className="mt-12 px-4">
      <div className="flex px-4  flex-col text-left justify-left py-6">
        <div>
          <h1 className="md:w-[50rem] lg:w-[47rem] font-bold lg:text-6xl text-2xl py-2">
            Exactly what you need at
            <span className="bg-[#F3E1E9] px-3 rounded-full py-2">
              {" "}
              the exact moment{" "}
            </span>
            you need it.{" "}
          </h1>
        </div>
        <p className="text-left md:w-[48rem] pt-6 pb-12 text-xl">
          This AI understands the meaning behind your writing and automatically
          links you to relevant things you’ve read and written
          about in the past.
        </p>
      </div>
      {/* <article className="px-6">
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697932374/unriddle_ai/info_sources_c92i58.png"
          alt=""
          className=""
          width={300}
          height={200}
        />
      </article> */}
      <div className="md:py-28 py-16">
        <hr />
      </div>
    </main>
  );
}
