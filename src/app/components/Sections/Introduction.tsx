import ProfileImage from "../../assets/perfil.jpeg";
import { Github, Linkedin } from "lucide-react";
import { Section } from "../Section";
import Image from "next/image";

export function Introduction() {
  return (
    <Section>
      {/* Container */}
      <div className="grid grid-cols-1 place-items-center">
        {/* First content */}
        <div className="flex items-start gap-6 sm:gap-10">
          {/* Social medias */}
          <div className="flex flex-col justify-start items-center gap-4 mt-32">
            <a
              href="https://github.com/LuanHMA"
              target="_blank"
              title="Ir para github"
            >
              <Github className="text-indigo-600 h-6 w-6 dark:text-teal-400 transition-transform hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/luan-henrique-407822207/"
              target="_blank"
              title="Ir para linkedin"
            >
              <Linkedin className="text-indigo-600 h-6 w-6 dark:text-teal-400 transition-transform hover:scale-110" />
            </a>
            <span className="h-28 w-[2px] bg-indigo-300 dark:bg-teal-300"></span>
          </div>

          {/* main text */}
          <div className="text-gray-800 space-y-6 text-sm sm:text-md md:text-lg dark:text-white">
            <div className="flex flex-col-reverse items-start gap-x-6 gap-y-4 md:flex-row md:justify-between md:items-end">
              <h1 className="text-lg font-black whitespace-nowrap tracking-wide sm:text-3xl">
                Olá, sou{" "}
                <span className="text-indigo-600 dark:text-teal-400">
                  Luan <br /> web developer
                </span>
              </h1>

              <Image
                src={ProfileImage}
                height={200}
                width={200}
                alt="Foto de perfil do Luan"
                className="w-40 h-40 rounded-sm border-t-4 border-r-4 border-t-indigo-600 border-r-indigo-600 pr-2 pt-2 sm:mr-10 sm:w-48 sm:h-48 dark:border-t-teal-400 dark:border-r-teal-400 transition-all"
              />
            </div>

            <p className="tracking-wide text-sm sm:text-base">
              Sou web developer, apaixonado por Javascript, desenvolvo
              aplicações para web desde 2019, atualmente trabalho como
              desenvolvedor de software na
              <a
                href="https://www.mesquita.rj.gov.br/"
                target={"_blank"}
                className="ml-2 text-indigo-400 cursor-pointer dark:text-teal-400"
              >
                Prefeitura de Mesquita
              </a>
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=5521987620686"
              target={"_blank"}
              className="text-sm inline-block bg-indigo-500 px-6 py-2 cursor-pointer rounded-lg text-white font-medium transition-all border-2 border-indigo-500
                hover:bg-white
                hover:text-indigo-400
                dark:hover:text-teal-400
                dark:hover:bg-darkBg
                dark:bg-teal-400
                dark:border-teal-400
                dark:text-gray-800
                sm:text-base"
            >
              Fale comigo
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
