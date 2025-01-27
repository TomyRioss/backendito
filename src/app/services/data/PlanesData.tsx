import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MdOutlineInsights, MdOutlineContactSupport } from 'react-icons/md';
import Link from 'next/link';

const planesDataAnalytics = [
  {
    id: '1',
    title: 'Análisis Básico de Datos',
    description:
      'Ideal para pequeñas empresas o proyectos que buscan comprender tendencias clave en sus datos.',
    details: {
      'Recopilación de Datos': '✅',
      'Análisis Exploratorio': '✅',
      'Visualización Básica': '✅',
      'Informe Resumido': '✅',
      'Modelos Predictivos': '❌',
      'Integración de Herramientas BI': '❌',
    },
    deliveryTime: '1 - 2 Semanas',
    price: '$300 USD',
  },
  {
    id: '2',
    title: 'Análisis Avanzado de Datos',
    description:
      'Diseñado para empresas que necesitan estrategias basadas en datos y análisis avanzados.',
    details: {
      'Recopilación y Limpieza de Datos': '✅',
      'Análisis Exploratorio Avanzado': '✅',
      'Dashboards Interactivos': '✅',
      'Modelos Predictivos': '✅',
      'Optimización de Procesos con Datos': '❌',
      'Integración de Herramientas BI': '❌',
    },
    deliveryTime: '3 - 4 Semanas',
    price: '$800 USD',
  },
  {
    id: '3',
    title: 'Consultoría Empresarial de Datos',
    description:
      'Ideal para grandes empresas que necesitan soluciones avanzadas e integradas en sus operaciones.',
    details: {
      'Estrategia Basada en Datos': '✅',
      'Desarrollo de Modelos Predictivos': '✅',
      'Integración Completa de Herramientas BI': '✅',
      'Análisis en Tiempo Real': '✅',
      'Soporte Técnico Dedicado': '✅',
      'Automatización de Procesos': '✅',
    },
    deliveryTime: '6 - 8 Semanas',
    price: '$1.550 USD',
  },
];

const PlanesData = () => {
  return (
    <section className="w-full px-4 py-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Planes Data Analytics
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planesDataAnalytics.map((plan, index) => (
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
              ¡Transforma tus datos en decisiones inteligentes! Contáctanos para
              más información.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button className="flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                <MdOutlineInsights />
                Comprar
              </Button>
              <Link href={'/contact'}>
                <Button className="flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white w-full">
                  <MdOutlineContactSupport />
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

export default PlanesData;
