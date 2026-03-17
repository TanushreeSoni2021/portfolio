import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { profile, services } from "../../data/site";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="About"
            title="A portfolio site should feel as intentional as the work inside it."
            description={profile.about}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {service.kicker}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
