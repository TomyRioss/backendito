import React from 'react';
import Planes from './PlanesScript';
import WorkInfo from '../pagesContent/WorkInfo';
import PaymentInfo from '../pagesContent/PaymentInfo';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <Link href={'/services'}>
        <FaArrowLeft className="absolute right-20 left-4 top-20 h-10 w-10 rounded-xl text-red-gray-800 hover:text-red-gray-600 transition-transform transform hover:scale-125 cursor-pointer dark:text-white" />
      </Link>
      <header className="  dark:bg-gray-900">
        <div className=" flex flex-col items-center justify-center text-black dark:bg-gray-900">
          <h1 className="text-4xl mb-5 dark:text-white mt-20">
            Scripting Personalizado
          </h1>
          <h3 className="text-gray-700 text-xl text-center px-4 w-1/2 dark:text-white">
            Nuestros planes de scripting están diseñados para empresas y
            profesionales que necesitan soluciones personalizadas para
            automatización, desarrollo y optimización de procesos mediante
            scripts avanzados. Ofrecemos servicios que garantizan eficiencia,
            seguridad y escalabilidad para tu negocio.
          </h3>
        </div>
      </header>
      <Planes />
      <WorkInfo />
      <PaymentInfo />
    </>
  );
};

export default page;
