"use client";

import { notFound } from "next/navigation";
import { services } from "@/app/data/services"; // Assuming your JSON data is in /data/services.ts
import { ContactForm } from "@/components/component/contact-form";
import Link from "next/link";
import { motion } from "framer-motion";
import CalendlyWidget from "@/components/CalendlyWidget";
import PackageSlideshow from "@/components/PackageSlideshow";

export default function PackageDetails({
  params,
}: {
  params: { category: string; package: string };
}) {
  const { category, package: packageName } = params;

  // Find the category
  const selectedCategory = services.find(
    (service) =>
      service.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  if (!selectedCategory) {
    return notFound();
  }

  // Find the package within the category
  const selectedPackage = selectedCategory.packages.find(
    (pkg) => pkg.name.toLowerCase().replace(/\s+/g, "-") === packageName
  );

  if (!selectedPackage) {
    return notFound();
  }

  const {
    name,
    price,
    originalPrice,
    features,
    additionalFeatures,
    excludedFeatures,
  } = selectedPackage;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-5xl mx-auto px-8 pt-32 pb-16"
    >
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link
          href="/pricing"
          className="text-black dark:text-blue-500 hover:underline font-medium"
        >
          Pricing
        </Link>{" "}
        /{" "}
        <Link
          href={`/pricing/${category}`}
          className="text-black dark:text-blue-500 hover:underline font-medium"
        >
          {selectedCategory.category}
        </Link>{" "}
        /{" "}
        <span className="text-black dark:text-gray-200 hover:underline font-medium cursor-pointer">
          {name}
        </span>
      </nav>

      {/* Image Slideshow */}
      {/* <PackageSlideshow /> */}

      {/* Header Section */}
      <div className="p-1 sm:p-4 md:p-4 mb-10 rounded-3xl bg-gray-200 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 shadow-input w-full shadow-[0px_-1px_0px_0px_var(--neutral-400)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-md sm:text-3xl lg:text-4xl font-bold text-black dark:text-white">
              {name}
            </h1>
            {originalPrice && (
              <div className="font-medium text-xs px-3 py-0.5 md:py-1 rounded-full relative bg-gradient-to-b from-blue-500 to-blue-700  text-white">
                <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                <p className="text-[10px] md:text-xs line-through">
                  from ₱{originalPrice.toLocaleString()}
                </p>
              </div>
            )}
          </div>

          <p className="text-gray-400 text-[10px] md:text-sm max-w-[200px] md:max-w-sm">
            {selectedCategory.description}
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <span className="text-4xl font-bold text-black dark:text-white">
              ₱{price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-200 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-input w-full shadow-[0px_-1px_0px_0px_var(--neutral-400)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full shadow-[0px_-1px_0px_0px_var(--neutral-400)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
          <h2 className="text-2xl font-semibold text-dark dark:text-white mb-4">
            What’s Included
          </h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-black dark:text-white text-base"
              >
                <span className="inline-block w-5 h-5 bg-blue-500 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
            {additionalFeatures &&
              additionalFeatures.map((feature, index) => (
                <li
                  key={`add-${index}`}
                  className="flex items-center text-black dark:text-white text-base"
                >
                  <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
          </ul>
        </div>

        {/* Exclusions Section */}
        {excludedFeatures && (
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full shadow-[0px_-1px_0px_0px_var(--neutral-400)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
              What’s Not Included
            </h2>
            <ul className="space-y-3">
              {excludedFeatures.map((exclusion, index) => (
                <li
                  key={index}
                  className="flex items-center text-black dark:text-white text-base"
                >
                  <span className="inline-block w-5 h-5 bg-red-500 rounded-full mr-3"></span>
                  {exclusion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Inquiry Section */}
      <div className="p-1 sm:p-4 md:p-4 mb-10 rounded-3xl bg-gray-200 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-input w-full shadow-[0px_-1px_0px_0px_var(--neutral-400)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Interested in this package?
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Schedule a meeting with us to discuss your needs or fill out the
            contact form below.
          </p>
          <CalendlyWidget url="https://calendly.com/clarkwayne023/30min" />
        </div>
      </div>

      <ContactForm />

      {/* Background Decoration */}
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
    </motion.div>
  );
}
