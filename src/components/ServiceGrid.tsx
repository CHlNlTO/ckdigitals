"use client";

import { Palette, Globe, Database, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { PrimaryButton } from "./component/PrimaryButton";
import Link from "next/link";

const services = [
  {
    title: "Web Design",
    description:
      "Design stunning, user-friendly websites with a focus on user experience and conversion.",
    icon: Palette,
    link: "/web-design",
  },
  {
    title: "Websites",
    description:
      "Build lightning-fast, next-gen websites optimized for the future of the internet.",
    icon: Globe,
    link: "/web-sites",
  },
  {
    title: "Internal Systems",
    description:
      "Develop custom internal systems that streamline your business processes.",
    icon: Database,
    link: "/web-systems",
  },
  {
    title: "E-commerce",
    description:
      "Create high-converting, secure e-commerce platforms that drive sales and revenue.",
    icon: ShoppingCart,
    link: "/web-ecommerce",
  },
];

export default function ServiceGrid() {
  return (
    <section className="pt-24 pb-72 bg-gradient-to-br from-transparent via-transparent to-blue-500 dark:to-blue-950 text-white overflow-hidden w-full">
      <div className="container mx-auto px-4 text-black dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-4xl md:text-5xl font-bold leading-[1.2] tracking-tighter text-foreground text-balance max-w-xs md:max-w-xl mx-auto"
        >
          Our Services
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center text-lg md:text-xl max-w-xs md:max-w-xl mx-auto"
        >
          We help you build smart solutions that bring quick results and value
          for your money.
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full h-full bg-gradient-to-br from-green-400 to-blue-600 rounded-[20px] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-full h-full bg-neutral-100 dark:bg-[#1a1a1a] rounded-lg transition-all duration-200 hover:scale-95 hover:rounded-[20px] p-6 flex flex-col justify-between gap-10 border border-blue-200 dark:border-neutral-800 hover:border-none">
                <div>
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-600 bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
                <Link href={service.link}>
                  <PrimaryButton>Learn More</PrimaryButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
