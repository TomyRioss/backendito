import React from 'react';
import PlanesDesktop from './PlanesDesktop';
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
        <h1 className="text-4xl mb-5">Desarrollo Desktop</h1>
        <h3 className="text-gray-700 text-xl text-center px-4 w-3/4 md:w-1/2">
          Ofrecemos soluciones modernas en{' '}
          <span className="font-semibold">
            desarrollo de aplicaciones de escritorio
          </span>
          , diseñadas para transformar la productividad de empresas y
          emprendedores. Nuestro equipo altamente experimentado crea
          aplicaciones seguras, escalables y optimizadas, adaptadas
          específicamente a las necesidades de tu negocio.
          <span className="font-bold text-black">
            ¿Listo para mejorar tu eficiencia y destacar en el mercado?
            ¡Descubre cómo!
          </span>
        </h3>
      </header>

      <PlanesDesktop />
      <WorkInfo />
      <PaymentInfo />
    </>
  );
};

export default page;
