import { Header } from "./components/Header";
import { AboutMe } from "./components/Sections/AboutMe";
import { Introduction } from "./components/Sections/Introduction";

export default function Home() {
  return (
    <div className="bg-neutral-50 pt-20 dark:bg-darkBg">
      <Header />

      <main className="text-sm text-gray-900 sm:text-lg">
        <Introduction />
        <AboutMe/>
      </main>
    </div>
  );
}
