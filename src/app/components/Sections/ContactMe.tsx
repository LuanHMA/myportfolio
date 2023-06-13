import { Section } from "../Section";

export function ContactMe() {
  return (
    <Section id="myContact">
      <div className="flex flex-col space-y-6">
        <h1 className="text-xl font-extrabold tracking-wider sm:text-2xl lg:text-3xl dark:text-white">
          <span className="text-indigo-400 font-medium mr-2 dark:text-teal-400">
            05.
          </span>
          {"<"}Fale comigo{">"}
        </h1>

        <p className="text-gray-800 indent-10 text-sm sm:text-md md:text-lg dark:text-white">
          Se interessou por algo que viu aqui ? Fique a vontade para entrar em
          contato comigo, podemos colocar sua ideia em prática!
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5521987620686"
          target={"_blank"}
          className="w-52 flex justify-center bg-indigo-500 px-6 py-2 cursor-pointer rounded-lg text-white font-medium transition-all border-2 border-indigo-500
                hover:bg-white
                hover:text-indigo-400

                dark:hover:text-teal-400
                dark:hover:bg-darkBg
                dark:bg-teal-400
                dark:border-teal-400
                dark:text-gray-800"
        >
          Mandar um oi!
        </a>
        <span className="text-lg font-extrabold tracking-wider text-gray-400 text-right sm:text-xl lg:text-2xl ">
          {"</"}Fale comigo{">"}
        </span>
      </div>
    </Section>
  );
}
