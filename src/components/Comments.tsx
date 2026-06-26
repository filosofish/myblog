import Giscus, { type Theme } from "@giscus/react";
import { useEffect, useState } from "react";
import { GISCUS } from "../config";

export default function Comments() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(storedTheme || systemTheme);
    }
  }, []);

  return <Giscus theme={theme} {...GISCUS} />;
}