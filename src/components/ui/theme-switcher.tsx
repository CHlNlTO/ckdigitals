"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./switch";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  return (
    <Switch
      checked={resolvedTheme === "dark"}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      className="mr-2"
    />
  );
}
