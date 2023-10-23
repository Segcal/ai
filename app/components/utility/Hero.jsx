import React from 'react'
import Image from 'next/image';

export default function HeroPage() {
  return (
    <main className="mt-12">
      <div className="flex px-4 items-center flex-col text-center justify-center py-6">
        <h1 className="md:w-[48rem] font-bold lg:text-6xl text-2xl py-2">
          <span className="bg-[#DEECDD] px-3 rounded-full py-2">
            Trusted by thousands{" "}
          </span>
          of researchers and students{" "}
        </h1>
        <p className="text-center pt-4 pb-12 text-xl">
          From the classroom to the boardroom.
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 pb-8 gap-4 px-8  justify-center items-center text-center">
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894287/unriddle_ai/stanford-logo_ioeyjg.svg"
          alt=""
          width={95}
          height={95}
        />
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894286/unriddle_ai/nyu-logo_rvpx8f.svg"
          alt=""
          width={95}
          height={95}
        />
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894286/unriddle_ai/mit-logo_bj9t1h.svg"
          alt=""
          width={95}
          height={95}
        />
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894285/unriddle_ai/meta-logo_wks3na.svg"
          alt=""
          width={95}
          height={95}
        />
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894285/unriddle_ai/mckinsey-logo_huavbb.svg"
          alt=""
          width={95}
          height={95}
        />
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894282/unriddle_ai/harvard-logo_yyvxat.svg"
          alt=""
          width={95}
          height={95}
        />
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894286/unriddle_ai/sp-logo_zsurcj.svg"
          alt=""
          width={95}
          height={95}
        />
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894282/unriddle_ai/instacart-logo_ypnqk1.svg"
          alt=""
          width={95}
          height={95}
        />
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894279/unriddle_ai/caltech-logo_wx7imf.svg"
          alt=""
          width={95}
          height={95}
        />
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894280/unriddle_ai/cambridge-logo_vjwfe4.svg"
          alt=""
          width={95}
          height={95}
        />
      </div>
      <div className="md:py-28 py-16">
        <hr />
      </div>
    </main>
  );
}
