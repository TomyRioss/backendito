import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const ServicesInfo = () => {
  const t = useTranslations('landingPage.ourServices.services');

  return (
    <div className="w-full bg-blue-800 dark:bg-blue-950 text-white py-12 md:py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="w-64 h-64 md:w-96 md:h-96  rounded-lg flex items-center justify-center">
            <Image
              src={'/chat.svg'}
              alt="teamworkers"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
          <h2 className="text-cyan-400 text-base md:text-lg uppercase font-semibold mb-3">
            Contactanos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Tú idea lista, en minutos.
          </h3>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            Contactanos para pedir el servicio que necesites a tú medida,
            ¡Precios personalizados y personal a tú altura!
          </p>
          <Link href={'/contact'}>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold text-base md:text-lg">
                Comienza ahora
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
