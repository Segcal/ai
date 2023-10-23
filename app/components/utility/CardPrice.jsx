import React from 'react'
import {PiSealWarning} from 'react-icons/pi'
import { GrFormCheckmark } from "react-icons/gr";

export default function CardPrice() {
  return (
    <main className="flex flex-col md:flex-col my-6  lg:flex-row gap-4">
      <div className="bg-gray-100 w-full lg:w-[22rem] px-4 py-4 rounded-md">
        <article>
          <h4 className="font-semibold text-xl py-2">Free</h4>
          <small className="flex gap-2 items-center text-gray-400">
            10 credits per month <PiSealWarning size={15} />
          </small>
        </article>
        <hr className="mt-4" />
        <article>
          <h4 className="">
            $ <span className="text-xl font-semibold">0</span> per month
          </h4>
          <small className="text-gray-400 py-2">No money, no problem</small>
          <div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>10 notes, uploads or chat messages per month</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Auto note and document linking</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Chat with documents</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>120 pages / 30 MB per upload</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>
                Inactive notes and documents are deleted after 30 days
              </small>
            </div>
          </div>
        </article>
        <button className="bg-black text-white transform transition-transform duration-300 hover:scale-110 w-full px-2 py-1 rounded-lg capitalize my-6">
          choose Free
        </button>
      </div>
      {/*  */}
      <div className="bg-gray-100 w-full lg:w-[22rem] px-4 py-4 rounded-md">
        <article>
          <h4 className="font-semibold text-xl py-2">Pro</h4>
          <small className="flex gap-2 items-center text-blue-500">
            150 credits per month
            <PiSealWarning size={15} />
          </small>
        </article>
        <hr className="mt-4" />
        <article>
          <h4 className="">
            $ <span className="text-xl font-semibold">16</span> per month
          </h4>
          <small className="text-gray-400 py-2">
            Billed yearly at $192/year
          </small>
          <div>
            <small>Everything in Free, plus:</small>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>150 notes, uploads or chat messages per month</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Unlimited AI auto-complete</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Unlimited webpage summaries</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>2000 pages / 50MB per upload</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Chat history</small>
            </div>
          </div>
        </article>
        <button className="bg-black text-white transform transition-transform duration-300 hover:scale-110 w-full px-2 py-1 rounded-lg capitalize my-6">
          choose Pro
        </button>
      </div>
      {/*  */}
      <div className="bg-gray-100 w-full lg:w-[22rem] px-4 py-4 rounded-md">
        <article>
          <h4 className="font-semibold text-xl py-2">Premium</h4>
          <small className="flex gap-2 items-center text-gray-400">
            Unlimited credits
            <PiSealWarning size={15} />
          </small>
        </article>
        <hr className="mt-4" />
        <article>
          <h4 className="">
            $ <span className="text-xl font-semibold">40</span> per month
          </h4>
          <small className="text-gray-400 py-2">
            Billed yearly at $480/year
          </small>
          <div>
            <small>Everything in Pro, plus:</small>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Unlimited notes, uploads and chat messages</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>4000 pages / 150MB per upload</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Priority support</small>
            </div>
          </div>
        </article>
        <button className="bg-black text-white transform transition-transform duration-300 hover:scale-110 w-full px-2 py-1 rounded-lg capitalize mb-6 mt-20">
          choose Premium
        </button>
      </div>
      {/*  */}
      <div className="bg-gray-100 w-full lg:w-[22rem] px-4 py-4 rounded-md">
        <article>
          <h4 className="font-semibold text-xl py-2">Team</h4>
          <small className="flex gap-2 items-center text-gray-400">
            Unlimited credits <PiSealWarning size={15} />
          </small>
        </article>
        <hr className="mt-4" />
        <article>
          <h4 className="">
            $ <span className="text-xl font-semibold">200</span> per month
          </h4>
          <div className="flex gap-2 items-center">
            <div>
              <small className="text-gray-400 py-2">
                $40 per seat per month
              </small>
            </div>
            <div>
              <small className="bg-blue-500/10 px-1 py-1 ronunded text-blue-500">
                5 seats
              </small>
            </div>
          </div>
          <div class="h-4 w-4/2 bg-blue-500 rounded-md relative my-1">
            <div class="w-3/4 h-4 bg-blue-600 rounded-md"></div>
          </div>

          <div>
            <small>Everything in Premium, plus:</small>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Invite team members</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Manage and revoke access</small>
            </div>
            <div className="flex gap-1 items-center my-2">
              <GrFormCheckmark size={15} />
              <small>Dedicated account manager</small>
            </div>
          </div>
        </article>
        <button className="bg-black mt-20 text-white transform transition-transform duration-300 hover:scale-110 w-full px-2 py-1 rounded-lg capitalize my-6">
          choose Team
        </button>
      </div>
    </main>
  );
}
