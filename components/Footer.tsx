import { content } from "../data/content";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500">
      <div className="max-w-4xl mx-auto px-6">
        <p>© {year} {content.hero.name}. All rights reserved.</p>
        <p className="mt-2 text-slate-400 dark:text-slate-600">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}
