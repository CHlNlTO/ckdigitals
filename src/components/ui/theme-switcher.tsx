"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <FiMoon
        className="text-black dark:text-white mr-2 -ml-2 cursor-pointer"
        onClick={() => setTheme("light")}
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className="text-zinc-500 hover:text-black dark:text-white mr-2 -ml-2 cursor-pointer"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="text-zinc-500 hover:text-black dark:text-white mr-2 -ml-2 cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
