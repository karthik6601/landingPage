import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-indigo-500/30 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}