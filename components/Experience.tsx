"use client";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <Briefcase className="text-indigo-400" /> Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {content.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Timeline dot and line for mobile */}
                <div className="absolute left-0 top-2 bottom-[-48px] w-px bg-slate-300 dark:bg-slate-800 md:hidden"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500 md:hidden shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>

                <div className="md:w-1/4 mb-4 md:mb-0 md:text-right shrink-0">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                  <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{exp.role}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-500">{exp.duration}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-500">{exp.location}</div>
                </div>

                <div className="md:w-3/4 relative bg-white/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-slate-800/50 transition-colors backdrop-blur-sm">
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:block absolute -left-[40px] top-8 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] border-4 border-white dark:border-slate-900 z-10"></div>
                  
                  {/* Timeline line for desktop per item */}
                  {index !== content.experience.length - 1 && (
                    <div className="hidden md:block absolute -left-[32.5px] top-12 bottom-[-4rem] w-px bg-slate-300 dark:bg-slate-800"></div>
                  )}

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
