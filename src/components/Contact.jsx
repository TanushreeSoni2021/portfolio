import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactInfo } from "../data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center bg-[var(--portfolio-gradient)] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Contact</p>
          <h2 className="mt-4 text-4xl font-black leading-[1.15] text-[var(--color-ink)] sm:text-5xl">
            Let&apos;s build something useful and visually strong.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.8] text-[var(--color-muted)] sm:text-base">
            I&apos;m open to development work, training opportunities, and collaborative projects.
          </p>
        </Motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[var(--color-border-soft)] bg-[rgba(255,255,255,0.62)] p-8 shadow-sm backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-[var(--color-ink)]">Get in Touch</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              If you have an idea or role in mind, feel free to send a message.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-base font-medium text-slate-800 hover:text-[var(--color-accent)]">
                  {contactInfo.email}
                </a>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location</p>
                <p className="mt-1 text-base font-medium text-slate-800">{contactInfo.location}</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-soft)] text-slate-600 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <FaGithub />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-soft)] text-slate-600 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[var(--color-border-soft)] bg-[rgba(255,255,255,0.62)] p-8 shadow-sm backdrop-blur-sm"
          >
            <form className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)] px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)] px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project or role..."
                  className="w-full rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)] px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:bg-white"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)] hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
