"use client";
import { useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export function Header() {
  const menuItems = [
    { title: "<SobreMim/>", href: "#about" },
    { title: "<Habilidades/>", href: "#skills" },
    { title: "<MeusProjetos/>", href: "#projects" },
    { title: "<Experiência/>", href: "#works" },
    { title: "<Contato/>", href: "#contact" },
  ];

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <header className="fixed left-0 top-0 right-0 flex justify-between items-center py-2 px-6 z-50 shadow-lg">
        <h1 className="font-black -tracking-widest text-4xl cursor-default">
          <span className="text-blue-600 text-2xl">{"<"}</span>
          Luan
          <span className="text-blue-500 text-2xl">{"/>"}</span>
        </h1>
        <button className="lg:hidden" onClick={toggleMenu}>
          <Bars3BottomRightIcon className="h-8 w-8" />
        </button>

        <ul
          className={`fixed top-16 w-[40vw] h-screen flex flex-col gap-y-4  px-6 shadow-lg z-50 transition-all duration-300 ${
            menuIsOpen ? "right-0" : "right-[-100vw]"
          }
            lg:flex-row lg:items-center lg:gap-x-4 lg:h-auto lg:relative lg:shadow-none lg:w-auto lg:top-auto lg:right-auto

          `}
        >
          {menuItems.map((item, index) => {
            return (
              <li key={index} className="w-full">
                <a
                  href={item.href}
                  className="flex items-center w-full py-4 text-right font-medium text-md tracking-wide dark:text-white"
                >
                  <span className="text-blue-500 dark:text-teal-600">
                    0{index + 1}.
                  </span>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </header>
      <div
        className={`fixed top-0 h-screen w-screen z-40 transition-all duration-700  ${
          menuIsOpen ? "opacity-90 bg-black/70" : "opacity-100 bg-none"
        } `}
      ></div>
    </>
  );
}
