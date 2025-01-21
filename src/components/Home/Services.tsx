import React from 'react';
import Link from 'next/link';
import { ServicesInfo } from './ServicesInfo';
import { useServicesList } from '@/lib/useServicesList';
import { useTranslations } from 'next-intl';

export const Services = () => {
  const t = useTranslations("landingPage.ourServices")

  return (
    <div className="flex flex-col items-center bg-blue-800 py-20">
      <h2 className="text-4xl font-bold text-white mb-12">
        {t("ourServices")}
      </h2>
      <ul className="grid grid-cols-3 gap-10 justify-items-center w-11/12">
        {useServicesList().map((service, index) => (
          <Link
            href={'/'}
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center w-full max-w-xl"
          >
            <li className="">
              <img
                src="https://i.ibb.co/4b2r0r3/contact-us.png"
                alt={service.title}
                className="mb-6 h-20 object-contain justify-center items-center w-full"
              />
              <h3 className="text-xl font-bold text-black">{service.title}</h3>
              <p className="text-sm text-gray-700 mt-2">
                {service.description}
              </p>
            </li>
          </Link>
        ))}
      </ul>
      <div className="w-full mt-20">
        <ServicesInfo />
      </div>
    </div>
  );
};

