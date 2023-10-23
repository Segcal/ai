import React from 'react'
import Image from 'next/image';

export default function CardHero() {
  return (
    <div>
      <article className="px-6">
        <div className="w-full flex gap-2 justify-center flex-col md:flex-row lg:flex-row">
          <main className="bg-[#efeeee] px-3 py-4 rounded-md md:w-[22rem]">
            <h4 className="font-semibold">Intelligence baked in</h4>
            <p className="py-4">
              Auto-generated prompts, relations, titles, sorting and more.
            </p>
            <div className="flex justify-center items-center animate-pulse-slow">
              <Image
                src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697940635/unriddle_ai/plus_ltigd0.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </main>
          <main className="bg-[#efeeee] px-3 py-4 rounded-md md:w-[22rem] lg:w-[37rem]">
            <h4 className="font-semibold">Group sources</h4>
            <p className="py-4">
              Interact with many documents at once to find information across
              several sources
            </p>
            <div className="flex justify-center items-center pt-6">
              <Image
                src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697940635/unriddle_ai/crm_dqrbqr.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </main>
        </div>
      </article>
    </div>
  );
}
