import { Section } from "../Section";

export function MyWorks() {
  const WorkContent = (
    occupation: string,
    enterprise: string,
    objective: string,
    time: string
  ) => {
    return (
      <div>
        <p className="text-gray-800 text-sm sm:text-md md:text-lg dark:text-white">
          <span className="text-indigo-400 font-medium dark:text-teal-400">
            {occupation}
          </span>{" "}
          - {enterprise} {time}
        </p>
        <small className="text-xs font-light text-gray-400 ml-2 dark:text-white">
          {objective}
        </small>
      </div>
    );
  };

  return (
    <Section id="myWorks">
      <div className="flex flex-col space-y-6">
        <h1 className="text-xl font-extrabold tracking-wider sm:text-2xl lg:text-3xl dark:text-white">
          <span className="text-indigo-400 font-medium mr-2 dark:text-teal-400">
            04.
          </span>
          {"<"}Experiência Profissional{">"}
        </h1>
        {WorkContent(
          "Web Developer",
          "Prefeitura de Mesquita.",
          "Atuo desenvolvendo aplicações para Web utilizando JS, TS, React e Firebase.",
          "2023 - atualmente"
        )}

        {WorkContent(
          "Frontend Developer",
          "Nexa.",
          "Atuo desenvolvendo aplicações para Web utilizando JS, TS, React e Firebase.",
          "2023 - atualmente"
        )}

        {WorkContent(
          "Autonômo",
          "",
          "Criação de sites, landing pages e sistemas para web.",
          "2019 - atualmente"
        )}

        <span className="text-lg  text-right font-extrabold tracking-wider text-gray-400 sm:text-xl lg:text-2xl ">
          {"</"}Experiência Profissional{">"}
        </span>
      </div>
    </Section>
  );
}
