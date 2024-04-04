import { useEffect, useState } from "react";
import { BsSunFill, BsMoon } from "react-icons/bs";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isListVisible, setListVisible] = useState(false);

  useEffect(() => {
    setDarkMode(
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDarkMode;

    setDarkMode(nextDark);

    if (nextDark) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      className={
        "flex fixed top-0 flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg bg-neutral-50 dark:bg-neutral-800 dark:border-neutral-800 border-b border-solid z-10"
      }
    >
      <div className="h-[inherit]">
        <a
          href="/"
          className="ml-2 h-[inherit] flex items-center tracking-wide dark:text-slate-50 font-play font-semibold text-xl gap-2 uppercase"
        >
          {children}
          hinode
        </a>
      </div>

      <button
        className="text-xl h-6 w-6 cursor-pointer md:hidden block lg:transform lg:-translate-y-1 dark:text-white"
        onClick={() => {
          setListVisible(!isListVisible);
        }}
      >
        &#8801;
      </button>

      <div
        className={`${
          isListVisible ? "" : "hidden"
        } w-full md:flex md:items-center md:w-auto`}
      >
        <ul
          className={
            "pt-4 text-base text-gray-700 dark:text-gray-400 md:flex md:justify-between md:pt-0 md:gap-5"
          }
        >
          <a
            className="md:p-4 py-2 block hover:text-black dark:hover:text-white"
            href="/materi"
          >
            Materi
          </a>

          <a
            className="md:p-4 py-2 block hover:text-black dark:hover:text-white"
            href="/galeri"
          >
            Galeri
          </a>

          <a
            className="md:p-4 py-2 block hover:text-black dark:hover:text-white"
            href="/keanggotaan"
          >
            Keanggotaan
          </a>

          <button
            className="md:p-4 py-2 block hover:text-black dark:hover:text-white"
            onClick={toggleTheme}
          >
            {isDarkMode ? <BsMoon /> : <BsSunFill />}
          </button>
        </ul>
      </div>
    </nav>
  );
};
