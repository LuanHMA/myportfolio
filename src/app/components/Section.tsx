interface SectionProps {
  children: React.ReactNode;
  id?: string
}

export function Section({ children, id }: SectionProps) {
  return (
    <section className="max-w-5xl my-[5vh] m-auto p-6 sm:p-20" id={id}>
      {children}
    </section>
  );
}
