import Link from 'next/link';
import { menusList } from '../../utils/menusList';
import Image from 'next/image';
import { Icon } from '../Home/Icon';

function NavBar() {
  return (
    <header className="flex justify-around items-center w-full h-16 bg-blue-800 px-10 py-4">
      <div>
        <Link href="/" className="flex gap-5 items-center">
          <Image
            src={'/backencito.png'}
            width={50}
            height={50}
            alt="fondo"
            className="rounded-xl"
          />
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
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
