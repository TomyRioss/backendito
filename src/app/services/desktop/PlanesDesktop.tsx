'use client';

import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MdOutlineDesktopMac, MdOutlineMessage } from 'react-icons/md';
import Link from 'next/link';

const planesData = [
  {
    id: '12',
    title: 'Aplicación Básica',
    description:
      'Ideal para pequeñas empresas o emprendedores que necesitan una solución rápida y funcional.',
    details: {
      'Compatibilidad con Windows y Mac': '✅',
      'Interfaz Personalizada': '✅',
      'Soporte Técnico Básico': '✅',
      'Actualizaciones Incluidas': '❌',
      'Integración con APIs': '❌',
      'Optimización de Rendimiento': '❌',
    },
    deliveryTime: '2 - 3 Semanas',
    price: '$375.00 USD',
  },
  {
    id: '13',
    title: 'Aplicación Avanzada',
    description:
      'Diseñado para empresas que requieren aplicaciones personalizadas y optimizadas.',
    details: {
      'Compatibilidad con Windows y Mac': '✅',
      'Interfaz Personalizada Avanzada': '✅',
      'Soporte Técnico Premium': '✅',
      'Actualizaciones Incluidas': '✅',
      'Integración con APIs': '✅',
      'Optimización de Rendimiento': '✅',
    },
    deliveryTime: '4 - 6 Semanas',
    price: '$750.00 USD',
  },
  {
    id: '14',
    title: 'Aplicación Empresarial',
    description:
      'Perfecto para empresas consolidadas que necesitan aplicaciones robustas, escalables y seguras.',
    details: {
      'Compatibilidad con Windows y Mac': '✅',
      'Interfaz Diseñada a Medida': '✅',
      'Soporte Técnico Dedicado': '✅',
      'Actualizaciones Incluidas': '✅',
      'Integración con APIs y Sistemas Legados': '✅',
      'Optimización de Rendimiento Avanzada': '✅',
    },
    deliveryTime: '6 - 8 Semanas',
    price: '$1,250.00 USD',
  },
];

const PlanesDesktop = () => {
  return (
    <section className="w-full px-4 py-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
        Nuestros Planes de Desarrollo Desktop
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planesData.map((plan, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {plan.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
                Características
              </h3>
              <ul className="space-y-2">
                {Object.entries(plan.details).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex justify-between text-sm dark:text-gray-200"
                  >
                    <span>{key}:</span> <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Separator className="my-4" />
            <div>
              <h4 className="text-md font-semibold text-gray-300 dark:text-gray-500">
                Plazo de Entrega
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {plan.deliveryTime}
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-green-400 dark:text-green-500">
                Precio
              </h4>
              <p className="text-lg font-bold text-green-500 dark:text-green-400">
                {plan.price}
              </p>
            </div>
            <Separator className="my-4" />
            <p className="text-xs text-gray-500 dark:text-gray-300 mb-4">
              ¡Aprovecha este precio exclusivo! Contáctanos para más detalles.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button className="flex justify-center items-center gap-2">
                <MdOutlineDesktopMac />
                Comprar
              </Button>
              <Link href={'/contact'}>
                <Button className="flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 hover:bg-gray-300 dark:text-white w-full">
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
