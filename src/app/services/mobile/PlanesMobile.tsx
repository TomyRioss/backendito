import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MdOutlineMobileFriendly, MdOutlineMessage } from 'react-icons/md';

const planesData = [
  {
    title: 'Aplicación Básica',
    description:
      'Perfecta para emprendedores que buscan una app sencilla para iniciar su negocio.',
    details: {
      'Compatibilidad iOS y Android': '✅',
      'Diseño Personalizado': '✅',
      'Integración con Redes Sociales': '✅',
      'Soporte Técnico': '1 mes',
      'Integración de APIs': '❌',
      'Actualizaciones Incluidas': '❌',
    },
    deliveryTime: '2 - 3 Semanas',
    price: '$800 USD',
  },
  {
    title: 'Aplicación Avanzada',
    description:
      'Ideal para negocios que buscan funcionalidades avanzadas y mayor personalización.',
    details: {
      'Compatibilidad iOS y Android': '✅',
      'Diseño Personalizado': '✅',
      'Integración con Redes Sociales': '✅',
      'Soporte Técnico': '3 meses',
      'Integración de APIs': '✅',
      'Actualizaciones Incluidas': '❌',
    },
    deliveryTime: '4 - 6 Semanas',
    price: '$1,500 USD',
  },
  {
    title: 'Aplicación Empresarial',
    description:
      'Diseñada para empresas que requieren una app robusta con funcionalidades avanzadas.',
    details: {
      'Compatibilidad iOS y Android': '✅',
      'Diseño Personalizado': '✅',
      'Integración con Redes Sociales': '✅',
      'Soporte Técnico': '6 meses',
      'Integración de APIs': '✅',
      'Actualizaciones Incluidas': '✅',
    },
    deliveryTime: '8 - 10 Semanas',
    price: '$3,000 USD',
  },
];

const PlanesMobile = () => {
  return (
    <section className="w-full px-4 py-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">
        Nuestros Planes de Desarrollo Móvil
      </h2>
      <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planesData.map((plan, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white"
          >
            <h3 className="text-xl font-bold">{plan.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
            <Separator className="my-4" />
            <div>
              <h3 className="text-lg font-bold mb-2">Características</h3>
              <ul className="space-y-2">
                {Object.entries(plan.details).map(([key, value]) => (
                  <li key={key} className="flex justify-between text-sm">
                    <span>{key}:</span> <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
              <h4 className="text-md font-semibold">Plazo de Entrega</h4>
              <p className="text-sm text-gray-700">{plan.deliveryTime}</p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-green-600">Precio</h4>
              <p className="text-lg font-bold">{plan.price}</p>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
              <Button className="flex justify-center items-center gap-2">
                <MdOutlineMobileFriendly />
                Comprar
              </Button>
              <Button className="flex justify-center items-center gap-2">
                <MdOutlineMessage />
                Contactar
              </Button>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default PlanesMobile;
