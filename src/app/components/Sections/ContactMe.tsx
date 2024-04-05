import { Section } from "../Section";

export function ContactMe() {
  return (
    <Section id="myContact">
      <div className="flex flex-col space-y-6">
        <h1 className="text-lg font-extrabold tracking-wider dark:text-white">
          <span className="text-indigo-400 font-medium mr-2 dark:text-teal-400">
            05.
          </span>
          {"<"}Fale comigo{">"}
        </h1>

        <p className="text-gray-800 indent-10 text-sm dark:text-white sm:text-base">
          Se interessou por algo que viu aqui ? Fique a vontade para entrar em
          contato comigo, podemos colocar sua ideia em prática!
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5521987620686"
          target={"_blank"}
          className="text-sm w-52 flex justify-center bg-indigo-500 py-2 cursor-pointer rounded-lg text-white font-medium transition-all border-2 border-indigo-500 sm:text-base
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
        <span className="font-extrabold tracking-wider text-gray-400 text-right text-lg ">
          {"</"}Fale comigo{">"}
        </span>
      </div>
    </Section>
  );
}
