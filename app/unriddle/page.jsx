'use client'

import React, { useState, useEffect } from "react";
import Sidebar from "../components/utility/Sidebar";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Chat from "../components/utility/Chat";
import { BsArrowReturnRight } from "react-icons/bs";
import Link from "next/link";

export default function UnriddlePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Add a click event listener to the window
  useEffect(() => {
    window.addEventListener("click", closeSidebar);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", closeSidebar);
    };
  }, []);

  // Prevent the click on the sidebar from closing it
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <main className="py-2 px-4 bg-white w-full h-screen text-black">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <article
        className="flex md:hidden items-center justify-between w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <button onClick={toggleSidebar}>
            <FaBars size={22} className="text-white" />
          </button>
        </div>
        <div>New Chart</div>
        <div>
          <button>
            <AiOutlinePlus size={22} className="text-white" />
          </button>
        </div>
      </article>
      <div className="pt-2 md:hidden">
        <hr />
      </div>

      {isSidebarOpen && <Sidebar onClick={stopPropagation} />}
      <div className="flex flex-col lg:px-38 justify-center items-center">
       
        <div>
          <h1 className="text-black text-4xl text-center mt-16">
            AI..
          </h1>
        </div>
        <div className="flex gap-2 flex-col w-full lg:w-[42vw] lg:flex-row mt-44">
          <div className="border border-white py-3 w-full rounded-lg px-12">
            <h3 className="font-semibold">Give me Idea</h3>
            <p>For what to do with my kids' art</p>
          </div>
          <div className="border border-white py-3 w-full rounded-lg px-12">
            <h3 className="font-semibold">Write a text</h3>
            <p>For what to give blessing</p>
          </div>
        </div>
        <div className=" gap-2 hidden lg:flex flex-col w-full lg:w-[42vw] lg:flex-row mt-8">
          <div className="border border-white py-3 w-full rounded-lg px-12">
            <h3 className="font-semibold">Give me Idea</h3>
            <p>For what to do with my kids' art</p>
          </div>
          <div className="border border-white py-3 w-full rounded-lg px-12">
            <h3 className="font-semibold">Write a text</h3>
            <p>For what to give blessing</p>
          </div>
        </div>
        <div className="flex items-center lg:w-[42vw] w-full outline-none mt-8">
          <input
            type="text"
            className="px-3 py-2 rounded text-black bg-blue-950/60 w-full"
          />
          <button className="bg-blue-300/10 py-2 rounded-e-md px-3">
            <BsArrowReturnRight size={25} />
          </button>
        </div>
        <div className="mt-4">
          <Link href="/" className="text-xl font-bold">
            AI
          </Link>
        </div>
      </div>
    </main>
  );
}


