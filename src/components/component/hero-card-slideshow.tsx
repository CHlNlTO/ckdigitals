"use client";

import townplace from "@/assets/townplace.png";
import snapfolia from "@/assets/snapfolia.png";
import synergreens from "@/assets/synergreens.png";
import websiteTemplate1 from "@/assets/website-template-1.png";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion } from "framer-motion";

const items = [
  {
    title: "Leaf Identification App",
    description:
      "Interactive and engaging design makes plant identification easy and fun.",
    image: snapfolia,
    link: "https://leaflet-web-app.vercel.app/",
    light: "text-[#0A7A0A]",
    dark: "dark:text-green-400",
  },
  {
    title: "Steel and Aluminum Supplier",
    description:
      "Clear product displays and simple navigation help users find what they need quickly.",
    image: townplace,
    link: "https://townplace-steel-and-aluminum.vercel.app/",
    light: "text-[#9C330C]",
    dark: "dark:text-orange-400",
  },
  {
    title: "Health and Wellness Platform",
    description:
      "Clean layout and intuitive design present wellness info clearly and attractively.",
    image: synergreens,
    link: "https://synergreens-deo-abutal.vercel.app/",
    light: "text-[#0A7A0A]",
    dark: "dark:text-green-400",
  },
  {
    title: "Construction Services",
    description:
      "High-quality images and detailed project showcases highlight expertise effectively.",
    image: websiteTemplate1,
    link: "https://website-template-1-gamma.vercel.app/",
    light: "text-[#2e0b7e]",
    dark: "dark:text-blue-400",
  },
];

export default function HeroCardSlideShow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden max-w-full">
        <InfiniteMovingCards items={items} direction="left" speed="normal" />
      </div>
    </motion.div>
  );
}
