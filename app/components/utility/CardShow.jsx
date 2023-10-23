import React from 'react'
import Image from 'next/image';


export default function CardShow() {
  return (
    <div className="my-4">
      <article className="px-6">
        <div className="w-full flex gap-2 justify-center flex-col md:flex-row lg:flex-row">
          <main className="bg-[#efeeee] px-3 py-4  rounded-md md:w-[22rem] lg:w-[37rem]">
            <h4 className="font-semibold">95+ languages supported</h4>
            <p className="py-4">
              Including English, French, German, Spanish, Italian, Portuguese,
              Russian, Japanese, Korean, Chinese and more.
            </p>
            <div className="flex justify-center items-center -mt-2  animate-spin-slow duration-200 ease-in-out pt-6">
              <Image
                src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697933413/unriddle_ai/download_yk8sxc.png"
                alt=""
                className="w-[22rem]"
                width={500}
                height={500}
              />
            </div>
          </main>
          <main className="bg-[#efeeee] px-3 py-4 rounded-md md:w-[22rem]">
            <h4 className="font-semibold">Full control</h4>
            <p className="py-4">
              Adjust the model, temperature and response length in settings.
            </p>
            <div className="flex justify-center items-center pt-11">
              <Image
                src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697933413/unriddle_ai/settings_gqfjw9.svg"
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
