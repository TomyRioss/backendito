import React from 'react';
import ServicesInfo from './ServicesInfo';
import Link from 'next/link';

const HomepageServices = () => {
  const services = [
    {
      title: 'Inteligencia Artificial',
      description:
        'Modelos de AI para optimizar procesos y decisiones estratégicas.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Desarrollo Web',
      description:
        'Creamos sitios web rápidos y modernos, adaptados a tu negocio.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Soluciones a Medida',
      description: 'Herramientas diseñadas para tus necesidades específicas.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Despliegue de Infraestructura',
      description:
        'Implementamos sistemas escalables y eficientes para tu negocio.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Análisis de Datos',
      description: 'Análisis avanzado para tomar decisiones basadas en datos.',
      image: 'https://via.placeholder.com/100',
    },
    {
      title: 'Seguridad y Escalabilidad',
      description:
        'Soluciones confiables, seguras y preparadas para crecer contigo.',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <div className="flex flex-col items-center bg-blue-800 py-20">
      <h2 className="text-4xl font-bold text-white mb-12">
        Nuestros servicios
      </h2>
      <ul className="grid grid-cols-3 gap-10 justify-items-center w-11/12">
        {services.map((service, index) => (
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

export default HomepageServices;
