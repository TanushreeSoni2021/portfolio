import Button from "../common/Button";
import Container from "../common/Container";
import { contactMethods, profile } from "../../data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,#172033_0%,#24344c_55%,#9f7c5f_140%)] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let this portfolio open conversations, not just show screenshots.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/72">{profile.contactPitch}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-[1.5rem] border border-white/12 bg-white/6 p-5 transition hover:bg-white/10"
                >
                  <p className="text-sm uppercase tracking-[0.16em] text-white/60">{item.label}</p>
                  <p className="mt-3 text-base font-medium text-white">{item.value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm leading-7 text-white/72">
              Built with React, Tailwind, and a more structured component system so future updates stay easy.
            </p>
            <Button as="a" href="mailto:hello@alexmorgan.dev" variant="secondary" className="border-white/20 bg-white text-[var(--color-ink)]">
              Start a project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
