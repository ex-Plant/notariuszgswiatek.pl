type Props = {
  children: React.ReactNode;
};

export function Eyebrow({ children }: Props) {
  return (
    <p className="mb-2 font-mono text-tag uppercase tracking-label text-ink/55">
      {children}
    </p>
  );
}
