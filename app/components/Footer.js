import React from 'react'
import Link from 'next/link';
import {FaTwitter} from 'react-icons/fa'
import {BsFillEnvelopeFill} from 'react-icons/bs'

export default function Footer() {
  return (
    <main className="lg:px-44 mt-8 px-8">
      <div className="flex items-left flex-col lg:flex-row justify-between">
        <div className="py-4">
          <Link href="/" className="text-xl font-bold">
            AI
          </Link>
        </div>
        <div className="flex md:gap-8 gap-8 flex-col lg:flex-row">
          <div className="flex flex-col items-left text-left gap-1">
            <p className="font-semibold">Rsources</p>
            <Link href="/">Guide</Link>
            <Link href="/">Changelog</Link>
            <Link href="/">FAQs</Link>
          </div>
          <div className="flex flex-col items-left gap-1">
            <p className="font-semibold">Company</p>
            <Link href="/">Support</Link>
            <Link href="/">Email</Link>
            <Link href="/">Twitter</Link>
          </div>
          <div className="flex flex-col items-left gap-1">
            <p className="font-semibold">Company</p>
            <Link href="/">Terms</Link>
            <Link href="/">Privacy</Link>
            <Link href="/" className="text-white">
              .
            </Link>
          </div>
        </div>
        <div className="text-gray-400">
          <p>© 2023 AI Ltd</p>
          <div className="flex gap-1">
            <Link href='/'>
              <FaTwitter size={22} />
            </Link>
            <Link href="/">
              <BsFillEnvelopeFill size={22} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
