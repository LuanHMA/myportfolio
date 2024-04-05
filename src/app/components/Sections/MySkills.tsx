import { Section } from "../Section";
import iconCSS from "@/app/assets/icon-css.svg";
import iconHTML from "@/app/assets/icon-html.svg";
import iconJS from "@/app/assets/icon-js.svg";
import iconTS from "@/app/assets/icon-ts.svg";
import iconReact from "@/app/assets/icon-react.svg";
import iconNode from "@/app/assets/icon-node.svg";
import iconNext from "@/app/assets/icon-nextjs.svg";
import Image from "next/image";

const skills = [
  { techName: "HTML", level: 100, img: iconHTML },
  { techName: "CSS", level: 100, img: iconCSS },
  { techName: "Javascript", level: 100, img: iconJS },
  { techName: "Typescript", level: 60, img: iconTS },
  { techName: "React JS", level: 80, img: iconReact },
  { techName: "Next JS", level: 70, img: iconNext },
  { techName: "Node", level: 40, img: iconNode },
];

export function MySkills() {
  return (
    <Section id="mySkills">
      <div className="flex flex-col gap-y-6">
        <h1 className="text-xl font-extrabold tracking-wider sm:text-lg  dark:text-white">
          <span className="text-indigo-400 font-medium mr-2 dark:text-teal-400">
            02.
          </span>
          {"<"}Minhas Habilidades{">"}
        </h1>

        <div className="shadow-2xl rounded-xl bg-slate-50 py-14 px-6 dark:bg-[#253238] grid grid-cols-1 sm:grid-cols-2 gap-6 space-y-4">
          {skills.map(({ level, techName, img }) => {
            return (
              <div className="w-full relative ">
                <span className="inline-flex items-center gap-x-2">
                  <Image src={img} alt={techName} width={25} />
                  {techName}
                </span>
                <div
                  className={`h-2 rounded-full z-20 absolute -bottom-2
                    ${level >= 0 && level <= 40 && "bg-indigo-300"}
                    ${level > 40 && level <= 60 && "bg-indigo-400"}
                    ${level > 60 && "bg-indigo-500"}
                  `}
                  style={{ width: `${level}%` }}
                />
                <div className="w-full h-2 bg-indigo-100 rounded-full absolute -bottom-2 z-10" />
                <span className="absolute right-0 bottom-0">{level}%</span>
              </div>
            );
          })}
        </div>

        <span className="text-lg font-extrabold tracking-wider text-gray-400 text-right sm:text-xl lg:text-lg ">
          {"</"}Minhas Habilidades{">"}
        </span>
      </div>
    </Section>
  );
}
