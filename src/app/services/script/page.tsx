import React from 'react';
import PlanesScript from './PlanesScript';
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
        <h1 className="text-4xl mb-5">Scripting Personalizado</h1>
        <h3 className="text-gray-700 text-xl text-center px-4 w-1/2">
          Nuestros planes de scripting están diseñados para empresas y
          profesionales que necesitan soluciones personalizadas para
          automatización, desarrollo y optimización de procesos mediante scripts
          avanzados. Ofrecemos servicios que garantizan eficiencia, seguridad y
          escalabilidad para tu negocio.
        </h3>
      </header>

      <PlanesScript />
      <WorkInfo />
      <PaymentInfo />
    </>
  );
};

export default page;
