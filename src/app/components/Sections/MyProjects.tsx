import { ExternalLink, Folder, Github } from "lucide-react";
import { Section } from "../Section";

export function MyProjects() {
  const ProjectBox = () => {
    return (
      <div className="sm:max-w-md sm:min-h-[280px] bg-white shadow-md rounded-xl p-6 space-y-4 transition-all hover:shadow-2xl hover:scale-105 dark:bg-[#253238]">
        <div className="flex justify-between items-center">
          <Folder className="text-indigo-500 dark:text-teal-500" />

          <div className="flex items-center gap-x-2">
            <a href="" target={"_blank"} title="Acessar repositório">
              <Github className="text-gray-800 dark:text-gray-400" />
            </a>
            <a href="" title="Ver demostração">
              <ExternalLink className="text-gray-800 dark:text-gray-400" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-md font-semibold dark:text-white">
            Nome do Projeto
          </h1>
          <p className="text-sm font-light dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex items-center flex-wrap gap-2 text-gray-800 text-xs sm:text-sm dark:text-white">
            <span className="bg-gray-200 p-2 rounded-xl dark:bg-[#384348]">
              JS
            </span>
            <span className="bg-gray-200 p-2 rounded-xl dark:bg-[#384348]">
              TS
            </span>
            <span className="bg-gray-200 p-2 rounded-xl dark:bg-[#384348]">
              React
            </span>
            <span className="bg-gray-200 p-2 rounded-xl dark:bg-[#384348]">
              Node
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Section id="myProjects">
      <div className="flex flex-col space-y-6" data-aos="fade-up">
        <h1 className="text-xl font-extrabold tracking-wider sm:text-2xl lg:text-3xl dark:text-white">
          <span className="text-indigo-400 font-medium mr-2 dark:text-teal-400">
            03.
          </span>
          {"<"}Meus Projetos{">"}
        </h1>

        <p className="text-gray-800 indent-10 text-sm sm:text-md md:text-lg dark:text-white">
          Acompanhe nessa pequena galeria a minha evolução como desenvolvedor,
          fique a vontade para interagir com alguns dos meus projetos {"=)"}
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {ProjectBox()}
          {ProjectBox()}
          {ProjectBox()}
          {ProjectBox()}
          {ProjectBox()}
          {ProjectBox()}
        </div>

        <span className="text-lg font-extrabold tracking-wider text-gray-400 text-right sm:text-xl lg:text-2xl ">
          {"</"}Meus Projetos{">"}
        </span>
      </div>
    </Section>
  );
}
