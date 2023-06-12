import { ExternalLink, Folder, Github } from "lucide-react";
import { Section } from "../Section";

export function MyProjects(){

    const ProjectBox = ()=>{
        return(
            <div className="sm:max-w-xs sm:min-h-[300px] bg-white shadow-lg rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                    <Folder />

                    <div className="flex items-center gap-x-2">
                        <a href="">
                            <Github />
                        </a>
                        <a href="">
                            <ExternalLink />
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-md font-semibold">Nome do Projeto</h1>
                    <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="flex items-center flex-wrap gap-2">
                        <span className="bg-gray-200 text-gray-800 text-xs p-2 rounded-xl sm:text-sm">JS</span>
                        <span className="bg-gray-200 text-gray-800 text-xs p-2 rounded-xl sm:text-sm">TS</span>
                        <span className="bg-gray-200 text-gray-800 text-xs p-2 rounded-xl sm:text-sm">React</span>
                        <span className="bg-gray-200 text-gray-800 text-xs p-2 rounded-xl sm:text-sm">Node</span>
                    </div>

                </div>

            </div>
        )
    }

    return(
        <Section id="myProjects">
            <div className="flex flex-col space-y-6" data-aos="fade-up">
                <h1 className="text-xl font-extrabold tracking-wider sm:text-2xl lg:text-3xl dark:text-white">
                    <span className="text-indigo-400 font-medium mr-2 dark:text-teal-400">03.</span>
                    {"<"}Meus Projetos{">"}
                </h1>

                <p>Uma pequena galeria de alguns projetos que desenvolvi ao longo dos anos.</p>

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
    )
}