interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="max-w-5xl m-auto p-6 sm:p-20">
      {children}
    </section>
  );
}
