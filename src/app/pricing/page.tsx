"use client";

import * as React from "react";
import { services } from "@/app/data/services";
import { motion } from "framer-motion";
import Link from "next/link";

interface IconProps {
  className?: string;
}

export default function Pricing() {
  return (
    <motion.main
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="pt-20"
    >
      <div className="w-full min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col justify-center items-center mb-24">
            <h1 className="flex justify-center items-center py-8 text-4xl sm:text-7xl md:text-7xl text-center max-w-3xl font-bold text-black dark:text-white z-20">
              Find a plan to deploy your business online
            </h1>
            <p className="text-gray-600 dark:text-gray-400 z-20">
              Choose a plan that best suits your business needs.
            </p>
          </div>

          <div className="flex flex-col gap-36">
            {services.map((service) => (
              <div key={service.category} className="space-y-6 z-20">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-black dark:text-white text-left">
                    {service.category}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400 text-left">
                    {service.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 xl:grid-cols-3">
                  {service.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-200 dark:bg-neutral-900 border ${
                        pkg.featured
                          ? "border-blue-400"
                          : "border-gray-100 dark:border-neutral-800"
                      }`}
                    >
                      <div className="flex flex-col gap-4 h-full justify-start">
                        <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-2 flex-col">
                              <p className="font-medium text-lg text-black dark:text-white">
                                {pkg.name}
                              </p>
                            </div>
                            {/* {pkg.featured && ( */}
                            <div className="font-medium text-xs px-3 py-1 rounded-full relative bg-gradient-to-b from-blue-500 to-blue-700  text-white">
                              <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                              <p className="text-xs line-through">
                                from ₱{pkg.originalPrice}
                              </p>
                            </div>
                            {/* )} */}
                          </div>
                          <div className="flex flex-row flex-wrap gap-1 justify-end items-center">
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Enjoy our 25% discount!
                            </p>
                            {/* <p className="text-sm text-gray-600 dark:text-gray-400 line-through">
                              ₱{pkg.originalPrice}
                            </p> */}
                          </div>
                          <div className="mt-8">
                            <div className="flex items-end">
                              <span className="text-md font-bold text-neutral-500 dark:text-neutral-200">
                                {service.category ===
                                "Business Internal Systems"
                                  ? "starts at"
                                  : "₱"}
                              </span>
                              <div className="flex items-start gap-2">
                                <span className="text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800">
                                  {pkg.price.toLocaleString()}
                                </span>
                              </div>
                              <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                                {pkg.name === "Ad-Hoc Support"
                                  ? "/hour"
                                  : pkg.name === "Monthly Retainer"
                                  ? "/month"
                                  : ""}
                              </span>
                            </div>
                          </div>
                          <Link
                            href={`/pricing/${service.category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${pkg.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            <button className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] h-10 px-8 whitespace-pre md:flex group relative w-full gap-1 rounded-lg text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 dark:bg-white dark:text-white hover:ring-blue-500 hover:ring-offset-2 hover:dark:ring-offset-zinc-900 dark:hover:ring-blue-500 mt-10">
                              Get Started
                            </button>
                          </Link>
                        </div>

                        <div className="mt-1 p-4">
                          {pkg.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start justify-start gap-2 my-4"
                            >
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
                                  className="h-3 w-3 [stroke-width:4px] text-neutral-300"
                                >
                                  <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                              </div>
                              <div className="font-medium text-black text-sm dark:text-white">
                                {feature}
                              </div>
                            </div>
                          ))}
                        </div>

                        {pkg.additionalFeatures &&
                          pkg.additionalFeatures.length > 0 && (
                            <>
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
                                    className="h-3 w-3 [stroke-width:4px] dark:text-neutral-300 text-black"
                                  >
                                    <path d="M12 5l0 14"></path>
                                    <path d="M5 12l14 0"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="p-4">
                                {pkg.additionalFeatures.map((feature) => (
                                  <div
                                    key={feature}
                                    className="flex items-start justify-start gap-2 my-4"
                                  >
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
                                        className="h-3 w-3 [stroke-width:4px] text-neutral-300"
                                      >
                                        <path d="M5 12l5 5l10 -10"></path>
                                      </svg>
                                    </div>
                                    <div className="font-medium text-black text-sm dark:text-white">
                                      {feature}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}

                        {pkg.excludedFeatures &&
                          pkg.excludedFeatures.length > 0 && (
                            <>
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
                                    className="h-3 w-3 [stroke-width:4px] dark:text-neutral-300 text-black"
                                  >
                                    <path d="M5 12h14"></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="p-4">
                                {pkg.excludedFeatures.map((excluded) => (
                                  <div
                                    key={excluded}
                                    className="flex items-start justify-start gap-2 my-4"
                                  >
                                    <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-red-500">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-3 w-3"
                                      >
                                        <path d="M18 6L6 18"></path>
                                        <path d="M6 6L18 18"></path>
                                      </svg>
                                    </div>
                                    <div className="font-medium text-black text-sm dark:text-white">
                                      {excluded}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-1/2 w-[1800px] h-[1800px] bg-blue-500 rounded-full blur-xl opacity-30 -z-10 overflow-hidden"
        style={{
          transform: "translateX(-50%) translateY(-50%)",
          maskImage:
            "radial-gradient(700px circle at center, blue, transparent)",
          WebkitMaskImage:
            "radial-gradient(700px circle at center, blue, transparent)",
        }}
      ></div>
    </motion.main>
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
