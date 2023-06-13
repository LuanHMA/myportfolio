import { Section } from "../Section";

export function MySkills() {
  const skilBox = (skillName: string, level: number) => {
    const veryLow = level >= 1;
    const low = level >= 2;
    const medium = level >= 3;
    const high = level >= 4;
    const veryHigh = level === 5;

    return (
      <div className="flex items-center gap-x-6">
        <h1 className="text-gray-800 dark:text-white">{skillName}</h1>
        <div className="flex items-center gap-x-2 my-4">
          <span
            className={`
              w-12 h-7 rounded-lg ${
                veryLow
                  ? "bg-indigo-100 text-indigo-100 dark:bg-teal-100 dark:text-teal-100"
                  : "bg-gray-200 text-gray-200"
              } sm:w-16 sm:h-9
          `}
          >
            .
          </span>

          <div
            className={`
                        w-12 h-7 rounded-lg ${
                          low
                            ? "bg-indigo-200 text-indigo-200 dark:bg-teal-200 dark:text-teal-200"
                            : "bg-gray-200 text-gray-200"
                        } sm:w-16 sm:h-9
                    `}
          >
            .
          </div>

          <div
            className={`
                        w-12 h-7 rounded-lg ${
                          medium
                            ? "bg-indigo-300 text-indigo-300 dark:bg-teal-300 dark:text-teal-300"
                            : "bg-gray-200 text-gray-200"
                        } sm:w-16 sm:h-9
                    `}
          >
            .
          </div>

          <div
            className={`
                        w-12 h-7 rounded-lg ${
                          high
                            ? "bg-indigo-400 text-indigo-400 dark:bg-teal-400 dark:text-teal-400"
                            : "bg-gray-200 text-gray-200"
                        } sm:w-16 sm:h-9
                    `}
          >
            .
          </div>

          <div
            className={`
                        w-12 h-7 rounded-lg ${
                          veryHigh
                            ? "bg-indigo-500 text-indigo-500 dark:bg-teal-500 dark:text-teal-500"
                            : "bg-gray-200 text-gray-200"
                        } sm:w-16 sm:h-9
                    `}
          >
            .
          </div>
        </div>
      </div>
    );
  };

  return (
    <Section id="mySkills">
      <div className="flex flex-col gap-y-6" data-aos="fade-up">
        <h1 className="text-xl font-extrabold tracking-wider sm:text-2xl lg:text-3xl dark:text-white">
          <span className="text-indigo-400 font-medium mr-2 dark:text-teal-400">
            02.
          </span>
          {"<"}Minhas Habilidades{">"}
        </h1>

        <div className="shadow-2xl rounded-xl bg-slate-50 p-6 dark:bg-[#253238]">
          {skilBox("HTML/CSS", 5)}
          {skilBox("Javascript", 5)}
          {skilBox("Typescript", 4)}
          {skilBox("React JS", 4)}
          {skilBox("Next JS", 3)}
          {skilBox("Node", 2)}
        </div>

        <span className="text-lg font-extrabold tracking-wider text-gray-400 text-right sm:text-xl lg:text-2xl ">
          {"</"}Minhas Habilidades{">"}
        </span>
      </div>
    </Section>
  );
}
