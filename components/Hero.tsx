"use client";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-300 text-sm font-medium"
        >
          {content.hero.tagline}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">{content.hero.name}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {content.summary}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#experience" className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95">
            View My Work <ArrowRight size={18} />
          </a>
          <a 
            href={`mailto:${content.contact.email}`} 
            className="w-14 h-14 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center hover:bg-indigo-200 dark:hover:bg-indigo-500/40 transition-all hover:scale-105 active:scale-95"
            aria-label="Email Me"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
