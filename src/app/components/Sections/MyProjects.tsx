"use client";
import { ExternalLink, Folder, Github } from "lucide-react";
import { Section } from "../Section";

const projectsData = [
  {
    name: "Carrinho de Compras",
    description: "Adicione produtos de uma lista no carrinho de compras!",
    techs: ["HMTL", "CSS", "TS", "CRUD", "React", "REDUX"],
    repoLink: "https://github.com/LuanHMA/DeliverySystem",
    projectLink: "https://deliverysystem-henritech.netlify.app/",
    developedIn: "03/05/2023",
  },
  {
    name: "Lista de Tarefas",
    description: "Adicione ou remova tarefas do seu dia a dia.",
    techs: ["HMTL", "CSS", "JS", "CRUD", "Local Storage"],
    repoLink: "https://github.com/LuanHMA/Lista-de-Tarefas",
    projectLink: "https://luanhma.github.io/Lista-de-Tarefas/",
    developedIn: "20/08/2022",
  },
  {
    name: "Netflix UI Clone",
    description:
      "Um clone da interface da tela inicial de filmes da Netflix, desenvolvido com a API da Tmdb.",
    techs: ["HMTL", "CSS", "JS", "API", "React", "Styled-Components"],
    repoLink: "https://github.com/LuanHMA/Netflix-Clone",
    projectLink: "https://netflix-uiclone.netlify.app/",
    developedIn: "25/05/2022",
  },
  {
    name: "Easy Bank (Landing Page)",
    description: "Uma página de vendas de um banco ficcio!",
    techs: ["HMTL", "CSS", "JS", "React"],
    repoLink: "https://github.com/LuanHMA/Easybank",
    projectLink: "https://easybank-spa.netlify.app/",
    developedIn: "25/04/2022",
  },
  {
    name: "GitHub Search",
    description:
      "Obtenha informações de um usuário do Github apenas digitando seu nome de usuário!",
    techs: ["HMTL", "CSS", "JS", "API "],
    repoLink: "https://github.com/LuanHMA/GitHub-Search",
    projectLink: "https://luanhma.github.io/GitHub-Search/",
    developedIn: "02/02/2022",
  },
  {
    name: "Jogo da velha",
    description:
      "O clássico jogo da velha, jogue junto com um amigo(a) e decida quem é o melhor!",
    techs: ["HMTL", "CSS", "JS"],
    repoLink: "https://github.com/LuanHMA/Jogo-da-Velha",
    projectLink: "https://luanhma.github.io/Jogo-da-Velha/",
    developedIn: "18/10/2021",
  },
];

export function MyProjects() {
  return (
    <Section id="myProjects">
      <div className="flex flex-col space-y-6">
        <h1 className="font-extrabold tracking-wider text-lg dark:text-white">
          <span className="text-base text-indigo-400 font-medium mr-2 dark:text-teal-400">
            03.
          </span>
          {"<"}Projetos relevantes{">"}
        </h1>

        <p className="text-gray-800 indent-10 text-sm sm:text-base dark:text-white">
          Acompanhe nessa pequena galeria a minha evolução como desenvolvedor,
          fique a vontade para interagir com alguns dos meus projetos {"=)"}
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map(
            ({
              description,
              developedIn,
              name,
              projectLink,
              repoLink,
              techs,
            }) => {
              return (
                <div className="sm:max-w-md sm:min-h-[280px] bg-white shadow-md rounded-xl p-6 space-y-4 transition-all hover:shadow-2xl hover:scale-105 dark:bg-[#253238]">
                  <div className="flex justify-between items-center">
                    <Folder className="text-indigo-500 dark:text-teal-500" />

                    <div className="flex items-center gap-x-2">
                      <a
                        href={repoLink}
                        target={"_blank"}
                        title="Acessar repositório"
                      >
                        <Github className="text-gray-800 hover:text-indigo-400 dark:text-gray-400 dark:hover:text-teal-400" />
                      </a>
                      <a href={projectLink} title="Ver demostração">
                        <ExternalLink className="text-gray-800 hover:text-indigo-400 dark:text-gray-400 dark:hover:text-teal-400" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h1 className="text-md font-semibold dark:text-white">
                      {name}
                    </h1>
                    <p className="text-sm font-light dark:text-white">
                      {description}
                    </p>

                    <p className="text-xs font-light text-gray-400 dark:text-white">
                      Desenvolvido em: {developedIn}
                    </p>

                    <div className="flex items-center flex-wrap gap-2 text-gray-800 text-xs dark:text-white">
                      {techs.map((tech) => {
                        return (
                          <span className="text-sm bg-gray-200 p-2 rounded-xl dark:bg-[#384348]">
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <span className="text-lg font-extrabold tracking-wider text-gray-400 text-right">
          {"</"}Projetos relevantes{">"}
        </span>
      </div>
    </Section>
  );
}
