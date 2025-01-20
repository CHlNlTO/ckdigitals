"use client";

import Link from "next/link";
import WordRotate from "../magicui/word-rotate";
import RightArrow from "./right-arrow";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative h-full overflow-hidden pt-20 md:pt-14 z-40">
          <div className="z-10 flex flex-col">
            <div className="mt-10 grid grid-cols-1 md:mt-20">
              <div className="flex flex-col items-center gap-6 px-7 pb-8 text-center md:items-center md:px-10">
                <Link href="/pricing">
                  <div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
                    <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
                    <div className="absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px ![mask-composite:subtract]"></div>
                    🎉
                    <div
                      data-orientation="vertical"
                      role="none"
                      className="shrink-0 bg-border w-px mx-1 h-4"
                    ></div>
                    <span className="animate-gradient bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent inline">
                      Don&apos;t miss our 25% sale, Grab now!
                    </span>
                  </div>
                </Link>
                <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                  <h1 className="text-black dark:text-white relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-left tracking-tighter text-balance md:text-center font-semibold md:text-7xl lg:text-7xl sm:text-7xl text-5xl">
                    Make your business known by
                    <WordRotate
                      className="text-blue-600 dark:text-blue-500 relative text-left tracking-tighter text-balance md:text-center font-semibold md:text-7xl pb-3 lg:text-7xl sm:text-7xl text-5xl"
                      words={[
                        "everyone",
                        "clients",
                        "customers",
                        "people",
                        "the world",
                        "communities",
                      ]}
                    />
                  </h1>
                </div>
                <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:text-white md:text-center md:text-lg">
                  We create seamless websites that make your business visible to
                  more{" "}
                  <b className="text-blue-600 dark:text-blue-500">clients</b>,
                  driving{" "}
                  <b className="text-blue-600 dark:text-blue-500">growth</b> and{" "}
                  <b className="text-blue-600 dark:text-blue-500">expanding</b>{" "}
                  your reach{" "}
                  <b className="text-blue-600 dark:text-blue-500">
                    effectively
                  </b>
                  .
                </p>
                <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                  <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                    <Link
                      className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 rounded-xl text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 dark:bg-white dark:text-white hover:ring-blue-500 hover:ring-offset-2 hover:dark:ring-offset-zinc-900 dark:hover:ring-blue-500"
                      href="/pricing"
                    >
                      Get Started
                      <RightArrow />
                    </Link>
                    <Link
                      className="inline-flex items-center justify-center bg-white dark:bg-[#121212] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 overflow-hidden rounded-xl text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 text-blue-700 dark:text-white hover:ring-blue-500 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-white dark:hover:ring-offset-black"
                      href="/projects"
                    >
                      Browse Projects
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-full -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-blue-700 opacity-20 sm:left-[calc(50%-30rem)] w-full"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-full -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-blue-700 opacity-20 sm:left-[calc(50%+36rem)] w-full"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
