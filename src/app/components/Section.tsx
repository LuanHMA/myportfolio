//Libs
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

export function Section({ children, id }: SectionProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="max-w-5xl px-6 py-8 m-auto sm:p-20"
      id={id}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-duration="2000"
    >
      {children}
    </section>
  );
}
