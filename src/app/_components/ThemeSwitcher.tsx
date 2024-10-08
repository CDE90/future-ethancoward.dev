"use client";

import React, { useEffect, useState } from "react";

export function ThemeSwitcher({
  className,
  children,
}: {
  className?: string;
  children: ((theme: "light" | "dark") => React.ReactNode) | React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    // const prefersDark = window.matchMedia(
    //   "(prefers-color-scheme: dark)",
    // ).matches;
    // const initialTheme = storedTheme ?? (prefersDark ? "dark" : "light");
    const initialTheme = storedTheme ?? "light";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  if (theme === null) {
    return (
      <div className={className}>
        {typeof children === "function"
          ? children(
              //   window.matchMedia("(prefers-color-scheme: dark)").matches
              //     ? "dark"
              //     : "light",
              "light",
            )
          : children}
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle theme"
    >
      {typeof children === "function" ? children(theme) : children}
    </button>
  );
}
