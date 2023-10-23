import React from 'react'
import Image from 'next/image';

export default function Teams() {
  return (
    <div>
      <main className="mt-12 px-4">
        <div className="flex px-4  flex-col text-left justify-left py-6">
          <div>
            <h1 className="md:w-[50rem] lg:w-[47rem] font-bold lg:text-6xl text-2xl">
              <span className="bg-[#F3E1E9] px-3 rounded-full py-1">
                {" "}
                Bring your team{" "}
              </span>{" "}
              into the mix with Unriddle Teams.
            </h1>
          </div>
          <p className="text-left md:w-[48rem] pt-6 pb-12 text-xl">
            Step into a collaborative workspace where everyone can contribute
            and interact with the same documents.
          </p>
        </div>
        <article className="px-6">
          <Image
            src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697945885/unriddle_ai/effective_xyiims.png"
            alt=""
            className=""
            width={200}
            height={200}
          />
        </article>
        <div className="md:py-28 py-16">
          <hr />
        </div>
      </main>
    </div>
  );
}
