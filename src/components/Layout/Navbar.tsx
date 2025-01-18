"use client";
import Link from "next/link";
import { menusList } from "../../shared/utils/menusList";
import { useContext } from "react";
import { ThemeContext } from "@/shared/styles/themes/themeProvider";
import DemoThemeButton from "@/components/ui/customButton";

function NavBar() {
  const themeContext: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(ThemeContext);

  const toggleThemeHandler = (): void => {
    themeContext.toggleThemeHandler();
  };

  return (
    <header className="flex justify-around items-center w-full h-16 bg-blue-700 dark:bg-black px-10 py-4">
      <div className="flex gap-5">
        <Link href="/">
          <h2 className="text-2xl text-white hover:text-blue-300 transition duration-300">
            Backendito
          </h2>
        </Link>
      </div>

      {/* Mapeo de menú para el navbar */}
      <nav>
        <ul className="flex gap-10 justify-center items-center">
          {menusList.map(({ name, path }) => (
            <li
              key={path}
              className="relative text-white hover:text-blue-300 transition duration-300"
            >
              <Link href={path}>
                <span>{name}</span>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 hover:w-full"></span>
            </li>
          ))}
          <li className="relative text-white hover:text-blue-300 transition duration-300">
            <button onClick={toggleThemeHandler}>Change theme</button>
          </li>
          <li>
            <DemoThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
