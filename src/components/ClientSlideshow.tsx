"use client";

import { motion } from "framer-motion";
import { ClientSlideshowCards } from "./ui/client-slideshow";
import FadeIn from "./component/fade-in";

export const items = [
  {
    title: "Nomad Telecom",
    description:
      "An e-commerce shopify store for an esims provider telecommunications company.",
    logo: "/nomad.png",
    image: "/bg-nomad.png",
    link: "https://nomadtelecom.co",
    package: "e-Commerce",
  },
  {
    title: "Townplace Steel and Aluminum Supplier",
    description:
      "Clear product displays and simple navigation help users find what they need quickly.",
    logo: "/townplace.png",
    image: "/bg-townplace.png",
    link: "https://townplace-steel-and-aluminum.vercel.app",
    package: "Business Profile",
  },
  {
    title: "City Chapels",
    description:
      "A funeral home website with a modern and clean design and a simple navigation bar.",
    logo: "/chapels.png",
    image: "/bg-city-chapels.png",
    link: "https://city-chapels.ph",
    package: "Business Profile",
  },
  {
    title: "Synergreens International",
    description: "Health and wellness company website.",
    logo: "/sgi.png",
    image: "/bg-synergreens.png",
    link: "https://synergreens-deo-abutal.vercel.app",
    package: "Business Profile",
  },
  {
    title: "First Balfour Inc.",
    description: "A construction company website.",
    logo: "/balfour.png",
    image: "/bg-balfour.png",
    link: "https://firstbalfour.com",
    package: "Internal System",
  },
  {
    title: "IMA Assessment and Training Center",
    description:
      "A sophisticated website portal providing easy access to training resources and assessment tools for future maritime professionals.",
    logo: "/ima.png",
    image: "/bg-ima.png",
    link: "http://www.imaphilsinc.com",
    package: "Internal System",
  },
];

export default function ClientSlideShow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <FadeIn duration={0}>
        <div className="flex flex-col items-center justify-center max-w-xs md:max-w-xl mx-auto px-4 py-8">
          <div className="mb-4 text-center text-4xl md:text-5xl font-bold leading-[1.2] tracking-tighter text-foreground text-balance">
            Trusted by <br />
            top-tier brands
          </div>
          <div className="mb-20 text-center text-lg md:text-xl text-muted-foreground">
            Empowering local and international brands with innovative digital
            solutions that drive growth and success.
          </div>
        </div>
      </FadeIn>
      <FadeIn duration={0}>
        <div className="h-20 rounded-xl flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden max-w-full">
          <ClientSlideshowCards items={items} direction="left" speed="slow" />
        </div>
      </FadeIn>
    </motion.div>
  );
}
