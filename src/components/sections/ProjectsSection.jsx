import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Tag from "../common/Tag";
import { projects } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Professional presentation for the projects that matter most."
          description="Each project card now uses a stronger content hierarchy so recruiters and clients can understand the outcome, stack, and context quickly."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/11] overflow-hidden bg-[var(--color-surface)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {project.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-5 text-sm font-semibold text-[var(--color-ink)]">
                  <a href={project.github} className="transition hover:text-[var(--color-accent)]">
                    GitHub
                  </a>
                  <a href={project.demo} className="transition hover:text-[var(--color-accent)]">
                    Live demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
