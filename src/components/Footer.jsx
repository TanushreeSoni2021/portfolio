import { profile } from "../data/site";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center border-t border-[var(--color-border-soft)] bg-[var(--portfolio-gradient)] px-6 py-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p className="font-semibold text-[var(--color-accent)]">{profile.name}</p>
        <p>{profile.footerNote}</p>
      </div>
    </footer>
  );
}
