import React from 'react'
import TogglePage from '../components/utility/Toggle';
import CardPrice from '../components/utility/CardPrice';
import Moving from '../components/Moving';
import MainAccordion from '../components/MainAccordion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <div className="md:mt-24 mt-24 lg:px-48 px-8 container">
        <div>
          <h1 className="capitalize w-[22rem] md:w-[50rem] font-bold lg:text-6xl text-2xl py-2">
            The intelligent library for readers and researchers.
          </h1>
          <p className="text-gray-400 font-semibold py-4">TRUSTED BY</p>
          <div className="flex flex-wrap gap-4">
            <Image
              src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894285/unriddle_ai/mckinsey-logo_huavbb.svg"
              alt=""
              width={95}
              height={95}
              className="text-gray-500 opacity-40"
            />
            <Image
              src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894286/unriddle_ai/nyu-logo_rvpx8f.svg"
              alt=""
              width={95}
              height={95}
              className="text-gray-500 opacity-40"
            />
            <Image
              src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894286/unriddle_ai/mit-logo_bj9t1h.svg"
              alt=""
              width={95}
              height={95}
              className="text-gray-500 opacity-20"
            />
            <Image
              src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894285/unriddle_ai/meta-logo_wks3na.svg"
              alt=""
              width={95}
              height={95}
              className="text-gray-500 opacity-40"
            />
            <Image
              src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894280/unriddle_ai/cambridge-logo_vjwfe4.svg"
              alt=""
              width={95}
              height={95}
              className="text-gray-500 opacity-40"
            />
            <Image
              src="https://res.cloudinary.com/dtrqikle5/image/upload/v1697894282/unriddle_ai/harvard-logo_yyvxat.svg"
              alt=""
              width={95}
              height={95}
              className="text-gray-500 opacity-40"
            />
          </div>
          {/*  */}
          <div className="my-6">
            <TogglePage />
          </div>
          <CardPrice />
          <div className="flex px-4  flex-col text-left justify-left py-4">
            <div>
              <h1 className="md:w-[50rem] lg:w-[47rem] font-bold lg:text-6xl text-2xl py-2">
                Friends of Unriddle
              </h1>
            </div>
            <p className="text-left md:w-[48rem] pt-2 pb-12 text-xl">
              See what people are saying.
            </p>
          </div>
        </div>
      </div>
      <Moving />
      <div className="py-12 px-2 lg:px-56 my-12">
        <MainAccordion />
        <div className='pt-24'>
          <hr />
          <Footer />
        </div>
      </div>
    </main>
  );
}
