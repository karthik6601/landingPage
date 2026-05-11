"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
        isDark ? "bg-indigo-600" : "bg-slate-300"
      }`}
      aria-label="Toggle theme"
    >
      <div
        className={`w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon size={14} className="text-indigo-600" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </div>
    </button>
  );
}
