import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesInfo from './ServicesInfo';
import { useServicesList } from '@/lib/useServicesList';
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('landingPage.ourServices');
  return (
    <div className="flex flex-col items-center bg-blue-800 dark:bg-blue-950 py-12 md:py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
        {t('ourServices')}
      </h2>
      <div className="w-full max-w-7xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {useServicesList().map(services => (
            <Link
              href={services.path}
              key={services.title}
              className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-950 shadow-lg rounded-lg p-6 md:p-8 flex flex-col items-center text-center"
            >
              <li className="flex flex-col justify-center items-center">
                <Image
                  src={services.image}
                  alt={services.title}
                  width={100}
                  height={100}
                />

                <h3 className="text-lg md:text-xl font-bold text-black dark:text-white">
                  {services.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-2">
                  {services.description}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <ServicesInfo />
    </div>
  );
};

export default Services;
