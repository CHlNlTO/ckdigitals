"use client";

import { Badge } from "@/components/ui/badge";
import { projects } from "@/app/data/projects";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon } from "@/components/CloseIcon";

export default function Projects() {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full py-40 z-10 relative overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Featured Projects</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Crafting Digital Solutions, Empower Your Business
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-left">
                Trusted by clients to build custom websites, internal systems,
                and eCommerce stores that drive growth and success.
              </p>
            </div>
          </div>
          <>
            <AnimatePresence>
              {active && typeof active === "object" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 h-full w-full z-10"
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {active && typeof active === "object" ? (
                <div className="fixed inset-0  grid place-items-center z-[100]">
                  <motion.button
                    key={`button-${active.title}-${id}`}
                    layout
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.05,
                      },
                    }}
                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                    onClick={() => setActive(null)}
                  >
                    <CloseIcon />
                  </motion.button>
                  <motion.div
                    layoutId={`card-${active.title}-${id}`}
                    ref={ref}
                    className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                  >
                    <motion.div layoutId={`image-${active.title}-${id}`}>
                      <Image
                        priority
                        src={active.image}
                        alt={active.title}
                        className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                      />
                    </motion.div>

                    <div>
                      <div className="flex justify-between items-start px-4 pt-4 pb-0">
                        <div className="">
                          <motion.h3
                            layoutId={`title-${active.title}-${id}`}
                            className="font-medium text-neutral-700 dark:text-neutral-200 text-md"
                          >
                            {active.title}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${active.description}-${id}`}
                            className="text-neutral-600 dark:text-neutral-400 text-sm"
                          >
                            {active.category} - {active.package}
                          </motion.p>
                        </div>

                        <motion.a
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          href={active.link}
                          target="_blank"
                          className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                        >
                          Visit
                        </motion.a>
                      </div>
                      <div className="pt-2 relative px-4">
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-neutral-600 text-xs md:text-sm lg:text-base md:h-fit pb-8 flex flex-row flex-wrap items-start gap-1 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                        >
                          {active.features.map((feature, index) => (
                            <div key={index}>
                              <Badge className="text-[9.5px] py-0">
                                {feature}
                              </Badge>
                            </div>
                          ))}
                        </motion.div>
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-neutral-600 text-xs md:text-sm lg:text-base md:h-fit pb-8 flex flex-row flex-wrap items-start gap-1 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                        >
                          {active.description}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ) : null}
            </AnimatePresence>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((card, index) => (
                <motion.div
                  layoutId={`card-${card.title}-${id}`}
                  key={card.title}
                  onClick={() => setActive(card)}
                  className="p-4 flex flex-col rounded-3xl cursor-pointer"
                >
                  <div className="flex flex-col gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                    <motion.div layoutId={`image-${card.title}-${id}`}>
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="bg-zinc-800 object-contain mb-2 cursor-pointer shadow-2xl rounded-2xl"
                      />
                    </motion.div>
                    <div className="flex justify-center items-center flex-col space-y-2">
                      <motion.h3
                        layoutId={`title-${card.title}-${id}`}
                        className="text-xl font-medium tracking-tight z-10"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${card.description}-${id}`}
                        className="text-sm z-10 text-center"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </ul>
          </>
        </div>
      </div>
      <div
        className="absolute top-0 left-1/2 w-[2000px] h-[2000px] bg-blue-500 rounded-full blur-xl opacity-30 -z-10 overflow-hidden"
        style={{
          transform: "translateX(-50%) translateY(-50%)",
          maskImage:
            "radial-gradient(700px circle at center, blue, transparent)",
          WebkitMaskImage:
            "radial-gradient(700px circle at center, blue, transparent)",
        }}
      ></div>
    </motion.div>
  );
}
