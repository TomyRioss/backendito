import Link from 'next/link';
import { menusList } from '../../utils/menusList';
import Image from 'next/image';

function NavBar() {
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
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
