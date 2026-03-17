import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { skillGroups } from "../../data/site";
import { skills } from "../../data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Balanced across product thinking, frontend craft, and reliable delivery."
          description="The strongest portfolios communicate breadth and confidence quickly, so these capability groups are designed to be easy to scan."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-[1.5rem] bg-[var(--color-surface)] p-5">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{group.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Strength snapshot</p>
            <div className="mt-8 space-y-5">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-white/65">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-[var(--color-accent)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
