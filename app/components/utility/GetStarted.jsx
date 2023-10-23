import React from 'react'
import Link from 'next/link';
import Footer from '../Footer';

export default function GetStarted() {
  return (
    <main className="my-16">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="capitalize font-bold lg:text-6xl text-4xl py-2">
          Get started for free
        </h1>
        <p className="my-2 px-6 md:text-xl">
          Take AI for a spin today. No card required
        </p>
        <Link
          href="/"
          className="bg-black text-white duration-200 ease-in-out px-3 py-2 rounded-lg"
        >
          Try AI free
        </Link>
      </div>
      <div className="md:pt-28 pt-16">
        <hr />
      </div>
      <Footer />
    </main>
  );
}
