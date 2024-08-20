"use client";
import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface IconProps {
  className?: string;
}

export default function Pricing() {
  const radius = 500; // change this to increase the radius of the hover effect
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <main className="pt-40 bg-white dark:bg-black -z-20">
      <div className="flex justify-center items-center mb-24">
        <h1 className="flex justify-center items-center py-8 text-4xl sm:text-7xl md:text-7xl text-center max-w-3xl font-bold text-black dark:text-white">
          Find a plan to deploy your business online
        </h1>
      </div>
      <section className="h-auto w-full bg-white dark:bg-black flex items-center justify-center">
        <div className="absolute top-[400px] left-0 right-0 bottom-0 m-auto h-[500px] w-[500px] bg-gradient-to-r from-white to-white transform scale-[0.5] bg-black rounded-full blur-[512px]" />
        <div className="container px-4 md:px-6 mb-20">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="flex flex-col p-12 gap-16 lg:gap-20 max-w-sm bg-white dark:bg-black shadow-lg rounded-lg dark:bg-zinc-850 border border-zinc-700 z-20">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-start text-black dark:text-white">
                    Basic
                  </h3>
                  <div className="text-start text-black dark:text-white">
                    <span className="text-4xl font-bold">₱1498</span>/ month
                  </div>
                  <h1 className="text-sm text-start text-black dark:text-zinc-400">
                    You choose, we maintain.
                  </h1>
                </div>
                <ul className="space-y-3 h-[150px]">
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Free website of your own choice
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Website Maintenance
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Content Integration and Updates
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Email Integration
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Basic SEO Optimization
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Basic Security Measures
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full border border-black rounded-md text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                  Get Started &rarr;
                </Button>
              </div>
            </div>
            <motion.div
              style={{
                background: useMotionTemplate`
              radial-gradient(
                ${
                  visible ? radius + "px" : "0px"
                } circle at ${mouseX}px ${mouseY}px,
                white,
                transparent 100%
              )
            `,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
              className="p-[2px] rounded-lg transition duration-300 group/input"
            >
              <div className="relative border border-gray-300 rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-500 blur-sm border border-gray-300 rounded-lg"></div>
                <div className="relative flex flex-col p-12 gap-16 lg:gap-20 max-w-sm bg-white dark:bg-black shadow-lg rounded-lg dark:bg-zinc-850 border border-zinc-700 z-20">
                  <div className="p-4 text-xs font-bold text-white dark:text-black bg-gradient-to-r from-black to-zinc-700 dark:from-white dark:to-zinc-300 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Most Popular
                  </div>
                  <div className="flex flex-col gap-12 relative">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-start text-black dark:text-white">
                        Pro
                      </h3>
                      <div className="text-start text-black dark:text-white">
                        <span className="text-4xl font-bold">₱2648</span>/ month
                      </div>
                      <h1 className="text-sm text-start text-black dark:text-zinc-400">
                        Everything in Basic, with more features.
                      </h1>
                    </div>
                    <ul className="space-y-3 h-[150px]">
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-sm">
                          Custom URL{" "}
                          <span className="text-[10px]">
                            (www.yourwebsitename.com)
                          </span>
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-sm">
                          Web Analytics Report
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-sm">
                          Google My Business Integration
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-sm">
                          Automatic Backup and Restore
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-sm">
                          Advanced SEO Services
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-sm">
                          Enhanced Security Measures
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full border rounded-md bg-black hover:border-black dark:bg-white text-white hover:bg-white hover:text-black dark:border-black dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
                      Upgrade Now &rarr;
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col p-12 gap-16 lg:gap-20 max-w-sm bg-white dark:bg-black shadow-lg rounded-lg dark:bg-zinc-850 border border-zinc-700 z-20">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-end gap-1">
                    <h3 className="text-xl font-bold text-start text-black dark:text-white">
                      Custom
                    </h3>
                    <h1 className="text-sm text-start text-black dark:text-zinc-400 pb-[3px]">
                      starts at
                    </h1>
                  </div>
                  <div className="text-start text-black dark:text-white">
                    <span className="text-4xl font-bold">₱49,298</span>
                  </div>
                  <h1 className="text-sm text-start text-black dark:text-zinc-400">
                    For businesses with more versatile needs.
                  </h1>
                </div>
                <ul className="space-y-3 h-[150px]">
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Custom website
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Unlimited Revisions
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Tailored Features
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Design + Development
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      Database Allocation
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-sm">
                      API Integration
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full border border-black rounded-md text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
