import Button from "../common/Button";
import Container from "../common/Container";
import Tag from "../common/Tag";
import { profile, socialLinks, stats } from "../../data/site";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top_left,_rgba(196,164,132,0.25),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(30,41,59,0.12),_transparent_30%)]" />
      <Container className="pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Tag>{profile.availability}</Tag>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#projects">
                View projects
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Book a conversation
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 border-t border-[var(--color-border)] pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-[var(--color-ink)]">{stat.value}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-6 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,rgba(196,164,132,0.18),rgba(15,23,42,0.08))] blur-2xl" />
            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur">
              <div className="rounded-[1.5rem] bg-[var(--color-surface-strong)] p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-white/70">Profile</p>
                <h2 className="mt-3 text-2xl font-semibold">{profile.name}</h2>
                <p className="mt-2 text-white/72">{profile.role}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {profile.highlights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/55">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-white/90">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
