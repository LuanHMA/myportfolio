import { Section } from "../Section";

const works = [
  {
    occupation: "Web Developer",
    enterprise: "Prefeitura de Mesquita.",
    objective:
      "Atuo desenvolvendo aplicações para Web utilizando JS, TS, React e Firebase.",
    time: "2023 - atualmente",
  },
  {
    occupation: "Frontend Developer",
    enterprise: "Nexa.",
    objective:
      "Atuava desenvolvendo landing pages (Páginas de venda) utilizando HTML, CSS e JS.",
    time: "2021 - 2022",
  },
  {
    occupation: "Autonômo",
    enterprise: "",
    objective: "Criação de sites, landing pages e sistemas para web.",
    time: "2019 - atualmente",
  },
];

export function MyWorks() {
  return (
    <Section id="myWorks">
      <div className="flex flex-col space-y-6">
        <h1 className="text-xl font-extrabold tracking-wider sm:text-lg  dark:text-white">
          <span className="text-indigo-400 font-medium mr-2 dark:text-teal-400">
            04.
          </span>
          {"<"}Experiência Profissional{">"}
        </h1>

        {works.map(({ enterprise, objective, occupation, time }) => {
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
        })}

        <span className="text-lg  text-right font-extrabold tracking-wider text-gray-400 sm:text-xl lg:text-lg ">
          {"</"}Experiência Profissional{">"}
        </span>
      </div>
    </Section>
  );
}
