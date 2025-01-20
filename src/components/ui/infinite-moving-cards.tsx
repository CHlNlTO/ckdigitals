"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import ShineBorder from "../magicui/shine-border";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface StaticImageData {
  src: string;
  height: number;
  width: number;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
    light?: string;
    dark?: string;
    backgroundColor?: string;
    package?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 4, delay: 0.2 }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap overflow-hidden",
          start && "animate-scroll "
        )}
      >
        {items.map((item, idx) => (
          <ShineBorder
            key={idx}
            color={["#4400f1", "#FE8FB5", "#FFBE7B"]}
            className={`h-[20rem] sm:h-[26rem] group relative rounded-xl transition-all flex flex-col shrink-0 flex-grow focus:outline-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-draplin w-[480px] opacity-90 hover:opacity-100 hover:shadow-drap hover:border-draplin/40 dark:hover:border-draplin/40 hover:bg-gray-50/70 dark:hover:bg-[#121212] cursor-pointer overflow-hidden`}
          >
            <Link href={item.link} target="__blank">
              <div className="relative w-full object-cover object-center transition-opacity overflow-hidden flex flex-col items-center grow h-48 sm:h-full sm:max-h-[280px] p-0 rounded-xl shadow-xl">
                <div className="w-full z-10 grow rounded-xl shadow-xl">
                  <Image
                    alt={item.description}
                    width="2400"
                    height="1502"
                    decoding="async"
                    data-nimg="1"
                    className="max-w-full w-full h-full object-contain rounded-xl shadow-xl"
                    style={{ color: "transparent" }}
                    src={item.image}
                  />
                </div>
                <span className="dot-bg"></span>
              </div>
              <div className="p-3.5 flex flex-col gap-3 bg-transparent rounded-xl">
                <div className="bg-transparent">
                  <div className="flex items-center gap-2 bg-transparent">
                    <div
                      className={`${item.light} ${item.dark} h2-medium font-bold`}
                    >
                      {item.title}
                    </div>
                  </div>
                  <p className="description text-black dark:text-gray-200/50 text-xs">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div
                    className={` ${item.backgroundColor} text-white inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80`}
                  >
                    <span>{item.package}</span>
                  </div>
                  <div
                    className={`
                    group select-none rounded-full transition-all
                    flex items-center justify-center text-[0.8125rem]
                    tracking-[0.2px] leading-none focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-draplin
                    font-semibold w-fit p-0
                    ${item?.light || ""}
                    ${item?.dark || ""}
                  `}
                    suppressHydrationWarning={true}
                  >
                    View site
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 shrink-0 transition-all relative top-px ml-0.5 -mr-1.5 group-hover:translate-x-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </ShineBorder>
        ))}
      </ul>
    </motion.div>
  );
};
