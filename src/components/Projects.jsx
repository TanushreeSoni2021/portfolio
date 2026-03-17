import { motion as Motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
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
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Projects</p>
          <h2 className="mt-4 text-4xl font-black leading-[1.15] text-[var(--color-ink)] sm:text-5xl">
            Selected work presented in a cleaner, portfolio-ready layout.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.8] text-[var(--color-muted)] sm:text-base">
            A mix of application and product-style projects that highlight development, UI craft, and modern web tooling.
          </p>
        </Motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-[rgba(255,255,255,0.62)] shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(249,115,22,0.2)] bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--color-ink)]">{project.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{project.description}</p>
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-soft)] px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-dark)]"
                  >
                    <HiArrowTopRightOnSquare />
                    Live Demo
                  </a>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
