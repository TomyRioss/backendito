'use client';

import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from '@/shared/styles/themes/themeProvider';
import { useMenusList } from '@/shared/utils/useMenusList';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import LanguageDropdown from '../ui/LanguageDropdown';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

function NavBar() {
  const { isDarkTheme, toggleThemeHandler: toggleThemeHandlerContext } =
    useContext(ThemeContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menús memoizados correctamente fuera de efectos
  const menus = useMenusList();

  // Icono del tema calculado directamente
  const themeIcon = isDarkTheme ? (
    <MdLightMode className="text-dark dark:text-white" />
  ) : (
    <MdDarkMode className="text-dark dark:text-white" />
  );

  // Cerrar menú al cambiar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu-container');
      if (mobileMenu && !mobileMenu.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Animaciones
  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-opacity-35 dark:bg-gray-900/80 backdrop-blur-lg border-b dark:border-gray-700 border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">
          {/* Logo con animación */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Inicio"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                Backendito
              </h2>
            </Link>
          </motion.div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 ">
              {menus.map(item => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="relative text-dark dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Controles Derecha */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleThemeHandlerContext}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Cambiar a tema ${isDarkTheme ? 'claro' : 'oscuro'}`}
            >
              <span className="text-xl text-gray-700 dark:text-gray-300">
                {themeIcon}
              </span>
            </button>

            <LanguageDropdown />

            {/* Botón Mobile mejorado */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menú de navegación"
            >
              {isMobileMenuOpen ? (
                <FiX className="text-2xl text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu className="text-2xl text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </nav>

        {/* Menú Mobile con animaciones */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 md:hidden z-40"
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween' }}
                className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl mobile-menu-container"
              >
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="ml-auto block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <FiX className="text-xl text-gray-700 dark:text-gray-300" />
                  </button>
                </div>

                <nav className="p-4">
                  <ul className="space-y-2">
                    {menus.map(item => (
                      <motion.li
                        key={item.path}
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          href={item.path}
                          className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default NavBar;
