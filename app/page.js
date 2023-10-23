import Link from "next/link";
import HeroImages from "./components/HeroImages";
import HeroPage from "./components/utility/Hero";
import ShowCase from "./components/utility/ShowCase";
import Sections from "./components/utility/Sections";
import EasyCover from "./components/utility/EasyCover";
import CardPage from "./components/utility/Card";
import Moving from "./components/Moving";
import Landing from "./components/Landing";
import BasicAccordion from "./components/BasicAccordion";
import GetStarted from "./components/utility/GetStarted";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <>
    <Navbar />
      <main className="container md:mt-24 mt-24 flex flex-col items-center justify-center">
        <div>
          <h1 className="capitalize font-bold lg:text-6xl text-5xl py-2">
            read{" "}
            <span className="bg-[#FCECCC] px-3 rounded-full py-2">faster.</span>
          </h1>
          <h1 className="capitalize font-bold lg:text-6xl text-5xl py-2 mt-2">
            write better.
          </h1>
          <span className="bg-red-200 text-center flex w-[65%] justify-center items-center mx-auto h-[0.30rem] rounded-r-md "></span>
        </div>
        <p className="text-center sm:px-20 px-16 md:text-xl  lg:w-1/2 pt-2 mb-4">
          Quickly find info in documents, simplify complex topics, take notes
          and write with the power of AI.
        </p>
        <Link
          href="/"
          className="bg-black text-white transform transition-transform duration-300 hover:scale-110  ease-in-out px-3 py-2 rounded-lg"
        >
          Get Started
        </Link>
        <p className="pt-6">Join 100,000+ researchers</p>
        
        <hr />
        <ShowCase />
        <Sections />
        <EasyCover />
        <CardPage />
      </main>
      <Moving />
      <div className="md:mt-24 mt-24 flex flex-col items-center justify-center">
        
        <Landing />
        <div className="px-4 flex items-center justify-center flex-col">
          <h1 className="lg:text-6xl text-4xl text-center font-semibold">
            Frequently asked questions
          </h1>
          <div className="lg:px-56 my-12">
            <BasicAccordion />
            <GetStarted />
          </div>
        </div>
      </div>
    </>
  );
}

