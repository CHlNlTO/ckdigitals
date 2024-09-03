"use client";

import PrimaryLogo from "@/components/ui/logo";
import Link from "next/link";
import ThemeSwitch from "./theme-switcher";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="fixed left-[50%] top-4 md:top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg bg-white/80 dark:bg-[#121212]/80 p-2 pl-4 text-sm text-black dark:text-neutral-50/60 z-50 shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
        <Link
          href="/"
          className="block overflow-hidden text-black hover:text-white hover:stroke-black dark:text-white dark:hover:text-black dark:hover:stroke-white  transition-all duration-300 "
        >
          <PrimaryLogo />
        </Link>
        <Link
          href="#projects"
          className="block overflow-hidden text-zinc-500 hover:text-black dark:text-neutral-50/60 dark:hover:text-white transition-all duration-300"
        >
          <div className="h-[20px]">
            <span className="flex h-[20px] items-center">Projects</span>
            <span className="flex h-[20px] items-center text-neutral-50/60 ">
              Projects
            </span>
          </div>
        </Link>
        <Link
          href="/pricing"
          className="block overflow-hidden text-zinc-500 hover:text-black dark:text-neutral-50/60 dark:hover:text-white transition-all duration-300"
        >
          <div className="h-[20px]">
            <span className="flex h-[20px] items-center">Pricing</span>
            <span className="flex h-[20px] items-center text-neutral-50/60 ">
              Pricing
            </span>
          </div>
        </Link>
        <Link
          href="#contact"
          className='
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px]
          dark:border-neutral-700 px-4 py-1.5 font-medium
         text-black dark:text-neutral-300 transition-all duration-300 bg-white dark:bg-[#121212]

          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-black dark:before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]

          hover:scale-105hover:border-black dark:hover:border-neutral-50 hover:text-white dark:hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100'
        >
          Call us
        </Link>
        <ThemeSwitch />
        <div className="-z-40 absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
        <div className="-z-40 absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-px ![mask-composite:subtract]"></div>
      </div>
    </motion.nav>
  );
}
