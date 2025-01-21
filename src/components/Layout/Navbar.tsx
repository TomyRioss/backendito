'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function NavBar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleThemeHandler = () => setIsDarkTheme(!isDarkTheme);

  return (
    <header className="fixed flex justify-between items-center top-0 z-50 w-full h-16 bg-white dark:bg-blue-900 shadow-lg px-10 py-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src={'/backencito.png'}
            width={50}
            height={50}
            alt="fondo"
            className="rounded-full"
          />
          <h2 className="text-2xl dark:text-white text-blue-900 hover:text-blue-600 transition duration-300">
            Backendito
          </h2>
        </Link>
      </div>
      <nav className="flex justify-center items-center w-full">
        <ul className="hidden md:flex justify-center items-center gap-10">
          <li className="text-gray-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-slate-400 transition duration-300">
            <Link href="/">Inicio</Link>
          </li>
          <li className="text-gray-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-slate-400 transition duration-300">
            <Link href="/about">Acerca</Link>
          </li>
          <li className="text-gray-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-slate-400 transition duration-300">
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
        <button
          className="md:hidden text-white dark:text-black"
          onClick={toggleThemeHandler}
        >
          {isDarkTheme ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <button className="md:hidden text-gray-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-slate-400 transition duration-300">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
