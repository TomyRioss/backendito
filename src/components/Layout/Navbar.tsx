"use client";
import Link from "next/link";
import { menusList } from "../../shared/utils/menusList";
import { startTransition, useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/shared/styles/themes/themeProvider";
import BDDropdown from "../ui/dropdown";
import { getUserLocale, setUserLocale } from "@/shared/utils/getUserLocale";
import { Languages, Locale } from "@/i18n/config";

function NavBar() {
  const themeContext: ThemeContext = useContext(ThemeContext);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    Languages.find(async (lang) => lang.value === await getUserLocale()) || Languages[1]
  );

  const toggleThemeHandler = (): void => {
    themeContext.toggleThemeHandler();
  };

  const toggleLanguageHandler = (value: Locales): void => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  useEffect(() => {
    toggleLanguageHandler(currentLanguage.value);
  }, [currentLanguage]);

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
            <BDDropdown
              options={Languages}
              current={currentLanguage}
              setCurrent={setCurrentLanguage}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
