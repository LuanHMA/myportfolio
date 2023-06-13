"use client";
//Components
import { Header } from "./components/Header";
import { AboutMe } from "./components/Sections/AboutMe";
import { Introduction } from "./components/Sections/Introduction";
import { MySkills } from "./components/Sections/MySkills";
import { MyProjects } from "./components/Sections/MyProjects";
import { MyWorks } from "./components/Sections/MyWorks";
import { ContactMe } from "./components/Sections/ContactMe";

export default function Home() {
  return (
    <div className="bg-neutral-50 pt-20 min-h-screen dark:bg-darkBg">
      <Header />

      <main className="text-sm text-gray-900 sm:text-lg">
        <Introduction />
        <AboutMe />
        <MySkills />
        <MyProjects />
        <MyWorks />
        <ContactMe />
      </main>
    </div>
  );
}
