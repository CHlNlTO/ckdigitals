"use client";

import Image from "next/image";
import adminPanel from "@/assets/admin-panel2.png";
import { motion } from "framer-motion";
import Link from "next/link";
import RightArrow from "../ui/right-arrow";

export default function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.2 }}
      className="relative isolate overflow-hidden bg-white dark:bg-[#121212] px-6 mt-10 md:mt-40 pt-20 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 w-full max-w-7xl"
    >
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
          Expand your reach.
          <br />
          Boost your sales.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
          Deploy your business online and reach more clients. Start at a low
          cost and grow your business with us.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <Link
            className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 rounded-xl text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 dark:bg-white dark:text-black hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
            href="/pricing"
          >
            Contact Us
            <RightArrow />
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-semibold leading-6 text-black dark:text-white w-full flex flex-row items-center justify-center gap-2 tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-[.1px] hover:ring-black hover:ring-offset-2 p-2 hover:ring-offset-current dark:hover:ring-neutral-50 rounded-xl"
          >
            Request a demo <RightArrow />
          </Link>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
        <Image
          alt="App screenshot"
          src={adminPanel}
          width={1824}
          height={1080}
          className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
        />
      </div>
    </motion.div>
  );
}
