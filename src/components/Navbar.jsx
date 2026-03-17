import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navLinks } from "../data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[rgba(249,115,22,0.2)] bg-[rgba(253,251,247,0.84)] px-5 py-4 shadow-[0_18px_50px_rgba(249,115,22,0.12)] backdrop-blur-md sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <Motion.a
            href="#home"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="justify-self-start text-[1.9rem] font-black leading-none tracking-[-0.05em] text-[var(--color-ink)] sm:text-[2.1rem] flex items-center"
          >
            T<span className="text-[var(--color-accent)]">a</span>nush<span className="text-[var(--color-accent)]">r</span>ee
          </Motion.a>

          <div className="hidden items-center justify-center gap-6 rounded-full border border-[rgba(249,115,22,0.2)] bg-[rgba(255,253,248,0.78)] px-8 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-[13px] font-medium text-[var(--color-ink)] transition hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden justify-self-end md:block">
            <a
              href="#contact"
              className="inline-flex rounded-full border border-[rgba(249,115,22,0.25)] bg-[linear-gradient(180deg,#fb923c_0%,#ea580c_100%)] px-5 py-2.5 text-sm font-bold text-[var(--color-ink)] shadow-[0_12px_24px_rgba(249,115,22,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(249,115,22,0.24)]"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="col-start-3 inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-[var(--color-border-soft)] bg-white/60 text-slate-700 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 border-t border-[var(--color-border-soft)] px-1 pb-1 pt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-sm font-medium text-[var(--color-ink)] transition hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 block rounded-full bg-[linear-gradient(180deg,#fb923c_0%,#ea580c_100%)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-ink)]"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
