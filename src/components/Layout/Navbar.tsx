'use client';
import { menusList } from '../../shared/utils/menusList';
import { startTransition, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/shared/styles/themes/themeProvider';
import BDDropdown from '../ui/dropdown';
import { getUserLocale, setUserLocale } from '@/shared/utils/getUserLocale';
import { Languages, Locale } from '@/i18n/config';
import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  const themeContext: ThemeContext = useContext(ThemeContext);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    Languages.find(async lang => lang.value === (await getUserLocale())) ||
      Languages[1],
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
    <header className="fixed flex justify-between items-center top-0 z-50 w-full h-16 bg-white shadow-lg px-10 py-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src={'/backencito.png'}
            width={50}
            height={50}
            alt="fondo"
            className="rounded-full"
          />
          <h2 className="text-2xl text-blue-900 hover:text-blue-600 transition duration-300">
            Backendito
          </h2>
        </Link>
      </div>

      <nav className="flex justify-center w-full">
        <ul className="flex gap-10">
          {menusList.map(({ name, path }) => (
            <li
              key={path}
              className="relative text-gray-800 hover:text-blue-600 transition duration-300 font-bold font-xl"
            >
              <Link href={path}>
                <span>{name}</span>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
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
