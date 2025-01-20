"use client";

import townplace from "@/assets/townplace.png";
import snapfolia from "@/assets/snapfolia.png";
import synergreens from "@/assets/synergreens.png";
import websiteTemplate1 from "@/assets/website-template-1.png";
import nomad from "@/assets/nomad.png";
import courses from "@/assets/courses.png";
import desgy from "@/assets/desgy.png";
import chef from "@/assets/chef.png";
import cityChapels from "@/assets/city-chapels.png";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "framer-motion";

const items = [
  {
    title: "Snapfolia",
    description:
      "Interactive and engaging design makes plant identification easy and fun.",
    image: snapfolia,
    link: "https://trees.firstasia.edu.ph",
    light: "text-green-600",
    dark: "dark:text-green-400",
    backgroundColor: "bg-green-600",
    package: "Internal System",
  },
  {
    title: "Steel and Aluminum Supplier",
    description:
      "Clear product displays and simple navigation help users find what they need quickly.",
    image: townplace,
    link: "https://townplace-steel-and-aluminum.vercel.app",
    light: "text-[#f97316]",
    dark: "dark:text-orange-400",
    backgroundColor: "bg-[#f97316]",
    package: "Business Profile",
  },
  {
    title: "Courses Platform",
    description: "A platform where you can learn and teach courses.",
    image: courses,
    link: "https://al-educational-algotrimo.vercel.app",
    light: "text-[#611f69]",
    dark: "dark:text-purple-400",
    backgroundColor: "bg-[#611f69]",
    package: "Internal System",
  },
  {
    title: "Desgy",
    description: "A design agency for digital products.",
    image: desgy,
    link: "https://desgy.vercel.app",
    light: "text-[#0066ff]",
    dark: "dark:text-blue-400",
    backgroundColor: "bg-[#0066ff]",
    package: "Business Profile",
  },
  {
    title: "Construction Services",
    description:
      "High-quality images and detailed project showcases highlight expertise effectively.",
    image: websiteTemplate1,
    link: "https://website-template-1-gamma.vercel.app",
    light: "text-[#6091a7]",
    dark: "dark:text-blue-400",
    backgroundColor: "bg-[#6091a7]",
    package: "Business Profile",
  },
  {
    title: "Nomad Telecom",
    description:
      "An e-commerce shopify store for an esims provider telecommunications company.",
    image: nomad,
    link: "https://nomadtelecom.co",
    light: "text-[#d40d07]",
    dark: "dark:text-red-400",
    backgroundColor: "bg-[#d40d07]",
    package: "e-Commerce",
  },
  {
    title: "Health and Wellness Platform",
    description:
      "Clean layout and intuitive design present wellness info clearly and attractively.",
    image: synergreens,
    link: "https://synergreens-deo-abutal.vercel.app",
    light: "text-[#0A7A0A]",
    dark: "dark:text-green-400",
    backgroundColor: "bg-[#0A7A0A]",
    package: "Business Profile",
  },
  {
    title: "Chef's Kitchen",
    description: "A restaurant website with a modern and clean design.",
    image: chef,
    link: "https://al-kitchen-algotrimo.vercel.app",
    light: "text-[#df6751]",
    dark: "dark:text-orange-400/80",
    backgroundColor: "bg-[#df6751]",
    package: "Business Profile",
  },
  {
    title: "City Chapels",
    description:
      "A funeral home website with a modern and clean design and a simple navigation bar.",
    image: cityChapels,
    link: "https://city-chapels.ph",
    light: "text-[#2a9ca1]",
    dark: "dark:text-cyan-400",
    backgroundColor: "bg-[#2a9ca1]",
    package: "Business Profile",
  },
];

export default function HeroCardSlideShow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto px-4 py-8">
        <div className="mb-2 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
          Showcase
        </div>
        <div className="max-w-xl text-balance text-center text-base tracking-tight text-black dark:text-white md:text-center md:text-lg">
          Companies choose Algotrimo to build their profile websites and
          internal systems.
        </div>
      </div>
      <div className="h-[30rem] rounded-xl flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden max-w-full">
        <InfiniteMovingCards items={items} direction="left" speed="slow" />
      </div>
    </motion.div>
  );
}
