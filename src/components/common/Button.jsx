const styles = {
  primary:
    "bg-[var(--color-ink)] text-white shadow-lg shadow-[var(--color-ink)]/10 hover:-translate-y-0.5 hover:bg-[var(--color-accent)]",
  secondary:
    "border border-[var(--color-border)] bg-white/80 text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost:
    "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
};

export default function Button({
  as = "button",
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Component = as;
  const baseClassName = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${styles[variant]} ${className}`.trim();

  if (Component === "a") {
    return (
      <a href={href} className={baseClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Component className={baseClassName} {...props}>
      {children}
    </Component>
  );
}
