'use client'

import React, { useState } from "react";
import {PiSealWarning} from 'react-icons/pi'

export default function TogglePage() {
  const [isYearlyActive, setYearlyActive] = useState(true);
  const [isMonthlyActive, setMonthlyActive] = useState(false);

  const handleYearlyClick = () => {
    setYearlyActive(true);
    setMonthlyActive(false);
  };

  const handleMonthlyClick = () => {
    setYearlyActive(false);
    setMonthlyActive(true);
  };

  return (
    <main className="flex justify-between xl:px-14">
      <div>
        <div className="btn group text-black bg-gray-300 w-[16rem] px-2 justify-between py-1 items-center rounded-2xl flex">
          <button
            className={`px-6 py-1 w-[7rem] rounded-lg ${
              isYearlyActive ? "bg-gray-300" : "bg-white"
            }`}
            onClick={handleYearlyClick}
          >
            <h4>Yearly</h4>
          </button>
          <button
            className={`px-6 py-1 w-[7rem] rounded-lg ${
              isMonthlyActive ? "bg-gray-300" : "bg-white"
            }`}
            onClick={handleMonthlyClick}
          >
            <h4>Monthly</h4>
          </button>
        </div>
        <p className="text-blue-500 font-semibold my-4">
          Get 2 months free on a yearly plan ✨
        </p>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center gap-4 bg-gray-200 py-3 px-4 rounded-lg w-[22rem]">
          <PiSealWarning size={22} />
          <p className="text-xs ">
            It costs 1 credit to create a note, upload a document or send a
            message.
          </p>
        </div>
      </div>
    </main>
  );
}
