"use client";

import { ContactForm } from "@/components/component/contact-form";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-40"
    >
      <ContactForm />
      <div
        className="absolute top-0 left-1/2 w-[1800px] h-[1800px] bg-blue-500 rounded-full blur-xl opacity-30 -z-10 overflow-x-hidden"
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
