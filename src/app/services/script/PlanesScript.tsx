import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MdOutlineCode, MdOutlineMessage } from 'react-icons/md';
import Link from 'next/link';

const planesData = [
  {
    id: '9',
    title: 'Scripting Básico',
    description:
      'Ideal para pequeños proyectos o tareas específicas que requieren automatización simple y eficaz.',
    details: {
      'Automatización de Tareas': '✅',
      'Scripts Personalizados': '✅',
      'Integración con Sistemas': '✅',
      'Documentación Incluida': '✅',
      'Soporte Técnico Básico': '✅',
      'Optimización del Rendimiento': '❌',
    },
    deliveryTime: '1 - 2 Semanas',
    price: '$350.00 USD',
  },
  {
    id: '10',
    title: 'Scripting Avanzado',
    description:
      'Perfecto para soluciones complejas que requieren optimización, escalabilidad y soporte avanzado.',
    details: {
      'Automatización Completa': '✅',
      'Scripts Complejos': '✅',
      'Integración con APIs y Sistemas Legados': '✅',
      'Documentación Exhaustiva': '✅',
      'Soporte Técnico Premium': '✅',
      'Optimización Avanzada': '✅',
    },
    deliveryTime: '3 - 4 Semanas',
    price: '$500.00 USD',
  },
  {
    id: '11',
    title: 'Scripting Empresarial',
    description:
      'Diseñado para grandes empresas que necesitan soluciones de scripting personalizadas y seguras para procesos críticos.',
    details: {
      'Automatización Extensa': '✅',
      'Desarrollo a Medida': '✅',
      'Integración Segura con Sistemas Complejos': '✅',
      'Documentación Completa': '✅',
      'Soporte Técnico Dedicado': '✅',
      'Optimización y Seguridad Avanzada': '✅',
    },
    deliveryTime: '4 - 6 Semanas',
    price: '$750.00 USD',
  },
];

const PlanesDesktop = () => {
  return (
    <section className="w-full px-4 py-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Soluciones Personalizadas en Scripting
      </h2>
      <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planesData.map((plan, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {plan.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2 dark:text-gray-400">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                Características
              </h3>
              <ul className="space-y-2">
                {Object.entries(plan.details).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between text-sm dark:text-white"
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
              <h4 className="text-md font-semibold text-gray-900 dark:text-white">
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
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              ¡Aprovecha este precio exclusivo! Contáctanos para más detalles.
            </p>
            <div className="grid grid-cols-2 gap-4 ">
              <Button className="flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                <MdOutlineCode />
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

export default PlanesDesktop;
