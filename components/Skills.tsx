"use client";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { Code2 } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Code2 className="text-purple-600 dark:text-purple-400" /> Skills
          </h2>
          <div className="w-20 h-1 bg-purple-600 rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-6 text-center">Technology</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {content.skills.tech.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 font-medium shadow-sm hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-400 mb-6 text-center">Domains I've worked on</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {content.skills.domain.map((skill, index) => (
                <motion.div
                  key={`domain-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 font-medium shadow-sm hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
