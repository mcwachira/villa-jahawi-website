"use client ";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return [mode, setTheme];
};

function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  // const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useThemeSwitcher();

  useEffect(() => {
    setMounted(true);
    // setIsDark(theme === "dark");
  }, []);

  if (!mounted) {
    return null;
  }

  // const toggleDarkMode = () => {
  //   setIsDark(!isDark);
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center focus:outline-none"
    >
      {theme === "dark" ? (
        <div className="mr-2 text-4xl text-[#4a576E]">
          <RiSunLine />
        </div>
      ) : (
        <div className="mr-2 text-4xl text-gray-700">
          <span className="text-[#4a576E]">
            <RiMoonClearLine />
          </span>
        </div>
      )}
    </button>
  );
}

export default ThemeToggler;
