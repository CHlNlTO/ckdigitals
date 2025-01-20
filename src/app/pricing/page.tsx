import * as React from "react";
import { services } from "@/app/data/services";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export default function Pricing() {
  return (
    <main className="pt-20 bg-white dark:bg-[#121212]">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1200px_1200px_at_top,white,transparent)] absolute top-0 left-0 right-0 w-full h-full"
        )}
      />
      <div className="w-full min-h-screen bg-white dark:bg-[#121212]">
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
                            {pkg.featured && (
                              <div className="font-medium text-xs px-3 py-1 rounded-full relative bg-neutral-900 dark:bg-white dark:text-black text-white">
                                <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                                Featured
                              </div>
                            )}
                          </div>
                          <div className="mt-8">
                            <div className="flex items-end">
                              <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                                {service.category === "Company Internal Systems"
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
                          <button className="px-4 py-2 rounded-md button bg-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] w-full mt-10">
                            Get Started
                          </button>
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
