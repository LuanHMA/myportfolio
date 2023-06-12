'use client'
import { useEffect } from "react";

//Libs
import AOS from 'aos';
import 'aos/dist/aos.css';
//Components
import { Header } from "./components/Header";
import { AboutMe } from "./components/Sections/AboutMe";
import { Introduction } from "./components/Sections/Introduction";
import { MySkills } from "./components/Sections/MySkills";
import { MyProjects } from "./components/Sections/MyProjects";

export default function Home() {

  useEffect(()=> {
    AOS.init();
  },[])

  return (
    <div className="bg-neutral-50 pt-20 dark:bg-darkBg">
      <Header />

      <main className="text-sm text-gray-900 sm:text-lg">
        <Introduction />
        <AboutMe/>
        <MySkills/>
        <MyProjects/>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum, delectus ut, modi saepe laborum hic quidem autem animi necessitatibus tempora deleniti vitae in dolorem adipisci eum exercitationem eveniet libero?
      </main>
    </div>
  );
}
