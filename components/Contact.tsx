"use client";
import { motion } from "framer-motion";
import { content } from "../data/content";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-indigo-900/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <ContactCard icon={<Mail />} title="Email" value={content.contact.email} href={`mailto:${content.contact.email}`} />
          <ContactCard icon={<LinkedinIcon />} title="LinkedIn" value="Connect on LinkedIn" href={content.contact.linkedin} />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) {
  const CardContent = (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl h-full flex flex-col items-center justify-center text-center gap-3 transition-colors hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-slate-800"
    >
      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mb-2">
        {icon}
      </div>
      <h3 className="text-slate-900 dark:text-white font-medium">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm truncate w-full">{value}</p>
    </motion.div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    <div>{CardContent}</div>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
