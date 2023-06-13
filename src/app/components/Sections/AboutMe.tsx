import { Section } from "../Section";

export function AboutMe(){
    return(
        <Section id="aboutMe">
            <div className="flex flex-col gap-y-6">
                <h1 className="text-xl font-extrabold tracking-wider sm:text-2xl lg:text-3xl dark:text-white">
                    <span className="text-indigo-400 font-medium mr-2 dark:text-teal-400">01.</span>
                    {"<"}Sobre mim{">"}
                </h1>

                <p className="text-gray-800 indent-10 text-sm sm:text-md md:text-lg dark:text-white">
                    Estudo desenvolvimento web desde 2019, tenho conhecimentos tanto em
                    Backend quanto em Frontend, mas principalmente no Frontend, já desenvolvi diversas
                    aplicações para web, sempre se preocupando com uma boa experiencia do usuário,
                    um design responsivo e concordante.
                </p>

                <span className="text-lg font-extrabold tracking-wider text-gray-400 text-right sm:text-xl lg:text-2xl">
                    {"</"}sobre mim{">"}
                </span>
            </div>
        </Section>
    )
}