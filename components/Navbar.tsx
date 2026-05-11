"use client";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-white/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tighter">
        <span className="text-indigo-600 dark:text-indigo-400">KG</span>
      </div>
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
        <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
        <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
        <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <a 
          href="#contact" 
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </motion.nav>
  );
}
