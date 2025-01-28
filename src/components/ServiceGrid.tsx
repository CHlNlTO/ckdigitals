"use client";

import { Palette, Globe, Database, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { PrimaryButton } from "./component/PrimaryButton";
import Link from "next/link";

const services = [
  {
    title: "Web Design",
    description:
      "Craft cutting-edge, immersive user interfaces that push the boundaries of digital experiences.",
    icon: Palette,
    link: "/web-design",
  },
  {
    title: "Websites",
    description:
      "Develop lightning-fast, next-gen websites optimized for the future of the internet.",
    icon: Globe,
    link: "/web-sites",
  },
  {
    title: "Internal Systems",
    description:
      "Engineer advanced, AI-driven internal systems to revolutionize business operations.",
    icon: Database,
    link: "/web-systems",
  },
  {
    title: "E-commerce",
    description:
      "Build state-of-the-art online marketplaces with blockchain integration and AR product previews.",
    icon: ShoppingCart,
    link: "/web-ecommerce",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-24 bg-gradient-to-br from-transparent via-transparent to-blue-500 dark:to-blue-950 text-white overflow-hidden w-full">
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
              className="flex flex-col gap-2 items-start justify-start bg-white dark:bg-transparent dark:backdrop-filter dark:backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 bg-opacity-20 rounded-full mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                <service.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
              <div className="flex flex-col items-end justify-end">
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
