interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return <section className="min-h-screen py-20">{children}</section>;
}
