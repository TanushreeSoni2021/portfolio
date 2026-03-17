import { motion as Motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
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
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Skills</p>
          <h2 className="mt-4 text-4xl font-black leading-[1.15] text-[var(--color-ink)] sm:text-5xl">
            A modern stack for building full web experiences.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-[1.8] text-[var(--color-muted)] sm:text-base">
            My core skill set covers frontend UI, backend integration, styling systems, and developer workflow essentials.
          </p>
        </Motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-2xl border border-[var(--color-border-soft)] bg-[rgba(255,255,255,0.62)] p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-[var(--color-accent-soft)] p-3 text-2xl text-[var(--color-accent)]">
                    <Icon />
                  </div>
                  <span className="rounded-full border border-[var(--color-border-soft)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {skill.category}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--color-ink)]">{skill.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{skill.description}</p>
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                    <span>Proficiency</span>
                    <span className="font-semibold text-[var(--color-accent)]">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--color-border-soft)]">
                    <div
                      className="h-2 rounded-full bg-[var(--color-accent)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
