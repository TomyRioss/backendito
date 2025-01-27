'use client';

import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  useCallback,
} from 'react';
import Link from 'next/link';
import { ThemeContext } from '@/shared/styles/themes/themeProvider';
import { useMenusList } from '@/shared/utils/useMenusList';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import LanguageDropdown from '../ui/LanguageDropdown';

function NavBar() {
  const {
    isDarkTheme,
    toggleThemeHandler: toggleThemeHandlerContext,
  }: ThemeContext = useContext(ThemeContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeIcon, setThemeIcon] = useState<ReactNode>(<MdDarkMode />);

  // Cerrar el menú móvil cuando la pantalla se hace más grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleThemeHandler = useCallback((): void => {
    setThemeIcon(isDarkTheme ? <MdDarkMode /> : <MdLightMode />);
    toggleThemeHandlerContext();
  }, [setThemeIcon, isDarkTheme, toggleThemeHandlerContext]);

  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3  justify-evenly items-center h-16">
          <section>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h2 className="text-lg sm:text-2xl dark:text-white text-blue-900 hover:text-blue-600 transition duration-300">
                Backendito
              </h2>
            </Link>
          </section>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <ul className="flex items-center gap-4 lg:gap-6">
              {useMenusList().map(item => (
                <li
                  key={item.path}
                  className="dark:text-slate-300 text-gray-800 hover:text-blue-600 dark:hover:text-slate-400 transition duration-300"
                >
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleThemeHandler}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-blue-800 transition-colors"
            >
              <span className="block">
                <span className="text-gray-800 dark:text-white">
                  {themeIcon}
                </span>
              </span>
            </button>
            {/* Language Toggle Button */}
            <LanguageDropdown />
          </div>
          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-800 transition-colors text-black dark:text-white w-screen md:justify-between sm:justify-between"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-6 relative ">
              <span
                className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-current transform transition duration-300 translate-y-2 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ${
                  isMobileMenuOpen
                    ? '-rotate-45 translate-y-2'
                    : 'translate-y-4'
                }`}
              ></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="py-4 space-y-4">
            <ul className="space-y-2">
              {useMenusList().map(item => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className="block px-4 py-2 dark:text-slate-300 text-gray-800 hover:text-blue-600 dark:hover:text-slate-400 hover:bg-gray-50 dark:hover:bg-blue-800 rounded-lg transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between px-4 pt-2 border-t border-gray-200 dark:border-blue-800">
              <button
                onClick={toggleThemeHandler}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-blue-800 transition-colors"
              >
                <span className="block">
                  <span className="text-gray-800 dark:text-white">
                    {themeIcon}
                  </span>
                </span>
              </button>
              <LanguageDropdown />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
