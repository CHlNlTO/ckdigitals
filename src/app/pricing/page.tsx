"use client";
import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";

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
            <div className="flex flex-col p-12 gap-16 lg:gap-20 w-full max-w-sm bg-white dark:bg-black shadow-lg rounded-lg dark:bg-zinc-850 border border-zinc-700 z-20">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-start text-black dark:text-white flex flex-row justify-between">
                    <div className="text-sm text-start text-zinc-700 dark:text-zinc-400">
                      <span className="font-bold line-through">₱2996</span>
                    </div>
                    Basic
                  </h3>
                  <div className="text-start text-black dark:text-white">
                    <span className="text-4xl font-bold">₱1498</span>/ month
                  </div>
                  <h1 className="text-sm text-start text-black dark:text-zinc-400">
                    Choose a website, then we integrate.
                  </h1>
                </div>
                <ul className="space-y-3 h-[150px]">
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-xs">
                      Free website template of your own choice
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-xs">
                      We&apos;ll update and maintain your website
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-xs">
                      Inquiries sent to your email
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-xs">
                      Basic tools to improve Google search visibility
                    </p>
                  </li>
                  <li className="flex items-center">
                    <RxCross2 className="w-4 h-4 text-white dark:text-white bg-black dark:bg-red-500 rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-xs">
                      Choose your URL{" "}
                      <span className="text-[10px]">
                        (www.yourwebsitename.com)
                      </span>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <RxCross2 className="w-4 h-4 text-white dark:text-white bg-black dark:bg-red-500 rounded-full mr-2 p-1" />
                    <p className="text-black dark:text-zinc-400 text-xs">
                      Chatbot Integration
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full border bg-white dark:bg-black border-black rounded-md text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
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
              className="p-[2px] rounded-lg transition duration-300 group/input w-full max-w-sm"
            >
              <div className="relative border border-gray-300 rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-500 blur-sm border border-gray-300 rounded-lg"></div>
                <div className="relative flex flex-col p-12 gap-16 lg:gap-20 bg-white dark:bg-black shadow-lg rounded-lg dark:bg-zinc-850 border border-zinc-700 z-20">
                  <div className="p-4 text-xs font-bold text-white dark:text-black bg-gradient-to-r from-black to-zinc-700 dark:from-white dark:to-zinc-300 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Most Popular
                  </div>
                  <div className="flex flex-col gap-12 relative">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-start text-black dark:text-white flex flex-row justify-between">
                        <div className="text-sm text-start text-zinc-700 dark:text-zinc-400">
                          <span className="font-bold line-through">₱4896</span>
                        </div>
                        Pro
                      </h3>
                      <div className="text-start text-black dark:text-white">
                        <span className="text-4xl font-bold">₱2448</span>/ month
                      </div>
                      <h1 className="text-sm text-start text-black dark:text-zinc-400">
                        Everything in Basic, with more features.
                      </h1>
                    </div>
                    <ul className="space-y-3 h-[150px]">
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-green-500 rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-xs">
                          Choose your URL{" "}
                          <span className="text-[10px]">
                            (www.yourwebsitename.com)
                          </span>
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-green-500 rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-xs">
                          Chatbot Integration
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-xs">
                          Web Analytics Report
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-xs">
                          Google Business Profile Setup
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-xs">
                          Google Maps Integration
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-white dark:text-black bg-black dark:bg-white rounded-full mr-2 p-1" />
                        <p className="text-black dark:text-zinc-400 text-xs">
                          Advanced Search Engine Tools
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
            <div className="flex flex-col p-12 gap-16 lg:gap-20 w-full max-w-sm bg-white dark:bg-black shadow-lg rounded-lg dark:bg-zinc-850 border border-zinc-700 z-20">
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
                <Button className="w-full border bg-white dark:bg-black border-black rounded-md text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                  Contact Sales &rarr;
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

// Alternative Pricing Card Design
{
  /* <div className="grid grid-cols-1 gap-4 mt-5 max-w-7xl mx-auto md:grid-cols-2 xl:grid-cols-3">
          <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
            <div className="flex flex-col gap-4 h-full justify-start">
              <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                <div className="flex justify-between items-start ">
                  <div className="flex gap-2 flex-col">
                    <p className="font-medium text-lg text-black dark:text-white">
                      Hobby
                    </p>
                  </div>
                </div>
                <div className="mt-8 ">
                  <div className="flex items-end">
                    <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                      ₱
                    </span>
                    <div className="flex items-start gap-2">
                      <span className="text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800">
                        1498
                      </span>
                    </div>
                    <span className="text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2">
                      /month
                    </span>
                  </div>
                </div>
                <a className="px-4 py-2 rounded-md button bg-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10">
                  Get Hobby
                </a>
              </div>
              <div className="mt-1 p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Access to basic analytics reports
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Up to 10,000 data points per month
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Email support
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Community forum access
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Cancel anytime
                  </div>
                </div>
              </div>
              <div className="p-4"></div>
            </div>
          </div>
          <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
            <div className="flex flex-col gap-4 h-full justify-start">
              <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                <div className="flex justify-between items-start ">
                  <div className="flex gap-2 flex-col">
                    <p className="font-medium text-lg text-black dark:text-white">
                      Starter
                    </p>
                  </div>
                  <div className="font-medium text-xs px-3 py-1 rounded-full relative bg-neutral-900 dark:bg-white dark:text-black text-white">
                    <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                    Featured
                  </div>
                </div>
                <div className="mt-8 ">
                  <div className="flex items-end">
                    <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                      ₱
                    </span>
                    <div className="flex items-start gap-2">
                      <span className="text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800">
                        2648
                      </span>
                    </div>
                    <span className="text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2">
                      /month
                    </span>
                  </div>
                </div>
                <a className="px-4 py-2 rounded-md button bg-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10">
                  Get Starter
                </a>
              </div>
              <div className="mt-1 p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Advanced analytics dashboard
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Customizable reports and charts
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Real-time data tracking
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Integration with third-party tools
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-px dark:bg-neutral-950 bg-white"></div>
                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800"></div>
                <div className="absolute inset-0 h-5 w-5 m-auto rounded-xl dark:bg-neutral-800 bg-white shadow-[0px_-1px_0px_0px_var(--neutral-200)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-plus h-3 w-3 [stroke-width:4px] dark:text-neutral-300 text-black"
                  >
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Everything in Hobby Plan
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
            <div className="flex flex-col gap-4 h-full justify-start">
              <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                <div className="flex justify-between items-start ">
                  <div className="flex gap-2 flex-col">
                    <p className="font-medium text-lg text-black dark:text-white">
                      Pro
                    </p>
                  </div>
                </div>
                <div className="mt-8 ">
                  <div className="flex items-end">
                    <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                      ₱
                    </span>
                    <div className="flex items-start gap-2">
                      <span className="text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800">
                        1490
                      </span>
                    </div>
                    <span className="text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2">
                      /month
                    </span>
                  </div>
                </div>
                <a className="px-4 py-2 rounded-md button bg-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10">
                  Get Pro
                </a>
              </div>
              <div className="mt-1 p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Unlimited data storage
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Customizable dashboards
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Advanced data segmentation
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Real-time data processing
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-neutral-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    AI-powered insights and recommendations
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-px dark:bg-neutral-950 bg-white"></div>
                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800"></div>
                <div className="absolute inset-0 h-5 w-5 m-auto rounded-xl dark:bg-neutral-800 bg-white shadow-[0px_-1px_0px_0px_var(--neutral-200)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-plus h-3 w-3 [stroke-width:4px] dark:text-neutral-300 text-black"
                  >
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Everything in Hobby Plan
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 my-4">
                  <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-sky-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-check h-3 w-3 [stroke-width:4px] text-neutral-300"
                    >
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                  </div>
                  <div className="font-medium text-black text-sm dark:text-white">
                    Everything in Pro Plan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
