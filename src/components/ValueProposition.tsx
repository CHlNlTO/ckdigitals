"use client";

import React from "react";
import { Zap, Puzzle, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./component/fade-in";

const valuePropositions = [
  {
    title: "Smart Solutions That Get Results",
    description:
      "We use cutting-edge technology to solve your business challenges and drive growth. Our innovative solutions boost efficiency, cut costs, and amplify sales. Your success is our success.",
    icon: Zap,
  },
  {
    title: "Services Built Just for You",
    description:
      "We recognize that each business is unique. Our tailored approach ensures that whether you're upgrading legacy systems or building from scratch, our solutions are perfectly aligned with your needs and scalable for future growth.",
    icon: Puzzle,
  },
  {
    title: "We're Here for You, Every Step",
    description:
      "Our commitment doesn't end at deployment. We provide ongoing support to ensure smooth operations. We handle the technical intricacies, allowing you to focus on what you do best - running your business.",
    icon: HeartHandshake,
  },
];

export default function ValueProposition() {
  return (
    <div className="duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <FadeIn duration={0}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center text-4xl md:text-5xl font-bold leading-[1.2] tracking-tighter text-balance max-w-xs md:max-w-xl mx-auto"
          >
            Why Work With Us?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 text-center text-lg md:text-xl max-w-xs md:max-w-xl mx-auto"
          >
            Expert solutions, exceptional results, enduring partnership.
          </motion.div>
        </FadeIn>
        <FadeIn duration={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <Card
                key={index}
                icon={
                  <prop.icon className="w-8 h-8 text-blue-500 dark:text-blue-200" />
                }
                title={prop.title}
                description={prop.description}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function Card({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gradient-to-tr from-blue-200 via-white to-blue-300 dark:from-blue-800 dark:via-blue-700 dark:to-blue-950 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-8 border border-blue-100 dark:border-blue-900 flex flex-col items-start text-left group hover:-translate-y-2">
      <div className="mb-6 transform transition-transform duration-300 ease-in-out group-hover:scale-110">
        {icon}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
