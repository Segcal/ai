import React from 'react'
import Image from 'next/image';

export default function Effective() {
  return (
    <main className="mt-12 px-4">
      <div className="flex px-4  flex-col text-left justify-left py-6">
        <div>
          <h1 className="md:w-[50rem] lg:w-[47rem] font-bold lg:text-6xl text-2xl">
            From first drafts to final touches, ensure your words
            <span className="bg-[#FCECCC] px-3 rounded-full py-1">
              {" "}
              always shine.{" "}
            </span>{" "}
          </h1>
        </div>
        <p className="text-left md:w-[48rem] pt-6 pb-12 text-xl">
          Generate text with AI-autocomplete and highlight to improve, expand
          and get feedback.
        </p>
      </div>
      <article className="px-6">
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697945885/unriddle_ai/effective_xyiims.png"
          alt=""
          className=""
          width={100}
          height={100}
        />
      </article>
      <div className="md:py-28 py-16">
        <hr />
      </div>
    </main>
  );
}
