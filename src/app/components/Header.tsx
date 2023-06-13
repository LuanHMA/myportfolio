"use client";
import { useState } from "react";
import { useTheme } from 'next-themes';
import { AlignRight, Moon, Sun } from "lucide-react";

export function Header() {
  const menuItems = [
    { title: "<SobreMim>", href: "#aboutMe" },
    { title: "<Habilidades>", href: "#mySkills" },
    { title: "<MeusProjetos>", href: "#myProjects" },
    { title: "<Experiência>", href: "#myWorks" },
    { title: "<Contato>", href: "#myContact" },
  ];

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { setTheme,systemTheme,theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
      

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <>
      <header
        className="fixed left-0 top-0 right-0 bg-slate-50 flex justify-between items-center py-3 px-6 z-50 shadow-lg xl:justify-around dark:bg-darkBg dark:text-white"
        onMouseLeave={closeMenu}
      >
        <a href="#" className="font-black -tracking-widest text-3xl text-gray-700 sm:text-4xl dark:text-white">
          <span className="text-indigo-600 text-2xl dark:text-teal-600">
            {"<"}
          </span>
          Luan
          <span className="text-indigo-500 text-2xl dark:text-teal-500">
            {"/>"}
          </span>
        </a>

        <nav className="flex items-center">
          <button className="lg:hidden" onClick={toggleMenu}>
            <AlignRight className="h-8 w-8" />
          </button>
          <ul
            className={`fixed bg-slate-50 top-14 h-screen flex flex-col gap-y-4 px-10 shadow-lg z-50 transition-all duration-300 ${
              menuIsOpen ? "right-0" : "right-[-100vw]"
            }
              lg:flex-row lg:items-center lg:gap-x-4 lg:h-auto lg:relative lg:shadow-none lg:w-auto lg:top-auto lg:right-auto dark:bg-darkBg

            `}
          >
            {menuItems.map((item, index) => {
              return (
                <li key={index} className="w-full relative group">
                  <a
                    href={item.href}
                    className="flex items-center w-full py-4 text-right font-medium text-md tracking-wide dark:text-white"
                  >
                    <span className="text-indigo-500 dark:text-teal-400">
                      0{index + 1}.
                    </span>
                    {item.title}
                  </a>

                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-400 transition-all duration-200 group-hover:w-[60px] dark:bg-teal-400"></span>
                </li>
              );
            })}
          </ul>
          
          <button 
            className="bg-indigo-200 ml-3 lg:ml-0 p-2 rounded-full dark:bg-teal-800 " 
            onClick={
              ()=> currentTheme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {currentTheme === "dark" ? <Sun/> : <Moon />}
          </button>

        </nav>
      </header>
      <div
        className={`fixed top-0 h-screen w-screen z-40 transition-all duration-700 ${
          menuIsOpen ? "opacity-90 bg-black/70 block" : "hidden"
        } `}
      ></div>
    </>
  );
}
