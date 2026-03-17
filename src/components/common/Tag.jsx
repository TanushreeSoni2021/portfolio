export default function Tag({ children }) {
  return (
    <span className="inline-flex rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
      {children}
    </span>
  );
}
