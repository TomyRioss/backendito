import React from 'react';
import Planes from './Planes';
import WorkInfo from './WorkInfo';
import PaymentInfo from './PaymentInfo';

const page = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center text-black mt-20">
        <h1 className="text-4xl mb-5">Desarrollo Web</h1>
        <h3 className="text-gray-700 text-xl text-center px-4 w-1/2">
          Nuestros planes de desarrollo de sitios web son ideales para empresas
          que requieren sitios web realizados por equipos de programadores
          altamente experimentados, o individuales que desean dar visibilidad a
          su marca personal con Landing Pages o sitios web con un SEO impecable
          para una audiencia internacional.
        </h3>
      </header>
      <Planes />
      <WorkInfo />
      <PaymentInfo />
    </>
  );
};

export default page;
