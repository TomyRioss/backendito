import React from 'react';
import { Link } from 'next/link';

function NavBar() {
  // Traducciones para código Navigation
  const t = useTranslations('Navigation');

  // Mapeo de menu info para navbar
  const menus = menusList.map(({ name, path }) => (
    <NavLink
      href={path}
      key={path}
      className="text-white hover:text-lightGreen"
    >
      {t(name)}
    </NavLink>
  ));

  return (
    <header className="flex justify-between items-center w-full h-16 text-white  bg-darkGreen px-10  py-4">
      <div className="text-white hover:text-lightGreen">
        <Link href={'/'} className="flex gap-5">
          <FaPaw className="w-8 h-8 " />
          <h2 className="text-2xl"> AnimalCare </h2>
        </Link>
      </div>

      {/* Mapeo de menu para el navbar*/}
      <nav className="flex gap-10">
        {menus}
        <h2>login area</h2>
      </nav>
    </header>
  );
}

export default NavBar;
