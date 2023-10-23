import React from 'react'
import Image from 'next/image';

export default function ShowCase() {
  return (
    <main className="mt-12 px-4">
      <div className="flex px-4  flex-col text-left justify-left py-6">
        <div>
          <h1 className="md:w-[48rem] font-bold lg:text-6xl text-4xl  py-2">
            It all start with your <br></br>
          </h1>
          <span className="bg-[#D5E5EE] px-2 mt-4 rounded-full py-2 md:w-[48rem] font-bold lg:text-6xl text-4xl">
            information sources.{" "}
          </span>
        </div>
        <p className="text-left md:w-[48rem] pt-6 pb-12 text-xl">
           generates an AI assistant on top of any document so you can
          quickly find, summarize and understand info. No more endless skimming.
        </p>
      </div>
      {/* <article className="px-6">
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697928302/unriddle_ai/Screenshot_2023-10-21_234434_tasuj1.png"
          alt=""
          className=""
          width={300}
          height={300}
        />
      </article> */}
      <div className="md:py-28 py-16">
        <hr />
      </div>
    </main>
  );
}
