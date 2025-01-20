import React from 'react';
import PlanesMobile from './PlanesMobile';
import WorkInfo from '../pagesContent/WorkInfo';
import PaymentInfo from '../pagesContent/PaymentInfo';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <Link href={'/services'}>
        <FaArrowLeft className="absolute right-20 left-4 top-20 h-10 w-10 rounded-xl text-red-gray-800 hover:text-red-gray-600 transition-transform transform hover:scale-125 cursor-pointer" />
      </Link>
      <header className="flex flex-col items-center justify-center text-black my-20">
        <h1 className="text-4xl mb-5 font-bold">Desarrollo Mobile</h1>
        <h3 className="text-gray-700 text-xl text-center px-4 w-1/2">
          Nuestros planes de desarrollo aplicaciones son ideales para empresas
          que quieren darse a conocer y llegar a aún más plataformas,
          aplicaciones y servicios que requieran presencia multiplataforma, o
          incluso startups que quieren comenzar a dar sus primeros pasos,
          desarrollando su idea en una aplicación móvil profesiona,
          personalizada para cada cliente, y con las mejores prácticas de
          desarrollo.
        </h3>
      </header>
      <PlanesMobile />
      <WorkInfo />
      <PaymentInfo />
    </>
  );
};

export default page;
