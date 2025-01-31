import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MdOutlineMobileFriendly, MdOutlineMessage } from 'react-icons/md';
import Link from 'next/link';

const planesData = [
  {
    id: '0',
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
    price: 'AR$ 150.000 / $150 USD',
  },
  {
    id: '1',
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
    price: 'AR$ 325.000 / $325 USD',
  },
  {
    id: '2',
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
    price: 'AR$ 550.000 / $550 USD',
  },
];

const PlanesMobile = () => {
  return (
    <section className="w-full px-4 py-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Nuestros Planes de Desarrollo Móvil
      </h2>
      <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planesData.map((plan, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg bg-white dark:bg-gray-800"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {plan.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2 dark:text-gray-400">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
                Características
              </h3>
              <ul className="space-y-2">
                {Object.entries(plan.details).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between text-sm dark:text-gray-100"
                  >
                    <span>{key}:</span>{' '}
                    <span className="text-gray-900 dark:text-gray-300">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
              <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">
                Plazo de Entrega
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {plan.deliveryTime}
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-green-600">Precio</h4>
              <p className="text-lg font-bold text-green-600">{plan.price}</p>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
              <Button className="flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <MdOutlineMobileFriendly />
                Comprar
              </Button>
              <Link href={'/contact'}>
                <Button className="flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white w-full">
                  <MdOutlineMessage />
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default PlanesMobile;
