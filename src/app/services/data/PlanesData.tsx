import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MdOutlineAnalytics, MdOutlineMessage } from 'react-icons/md';

const planesData = [
  {
    id: '13',
    title: 'Análisis Básico',
    description:
      'Ideal para pequeñas empresas o proyectos personales que necesitan obtener insights clave de sus datos.',
    details: {
      'Análisis Descriptivo': '✅',
      'Panel de Visualización Básico': '✅',
      'Limpieza de Datos': '✅',
      'Automatización de Informes': '❌',
      'Modelos Predictivos': '❌',
      'Soporte Técnico': '1 mes',
    },
    deliveryTime: '1 - 2 Semanas',
    price: '$700 USD',
  },
  {
    id: '14',
    title: 'Análisis Avanzado',
    description:
      'Diseñado para empresas que necesitan una comprensión más profunda y herramientas avanzadas de análisis.',
    details: {
      'Análisis Descriptivo': '✅',
      'Panel de Visualización Personalizado': '✅',
      'Limpieza y Transformación de Datos': '✅',
      'Automatización de Informes': '✅',
      'Modelos Predictivos Básicos': '✅',
      'Soporte Técnico': '3 meses',
    },
    deliveryTime: '3 - 4 Semanas',
    price: '$1,500 USD',
  },
  {
    id: '15',
    title: 'Análisis Empresarial',
    description:
      'Perfecto para grandes empresas que buscan aprovechar al máximo sus datos con soluciones a medida y modelos avanzados.',
    details: {
      'Análisis Descriptivo': '✅',
      'Panel de Visualización Avanzado': '✅',
      'Limpieza y Transformación de Datos': '✅',
      'Automatización de Informes': '✅',
      'Modelos Predictivos y Prescriptivos': '✅',
      'Soporte Técnico': '6 meses',
    },
    deliveryTime: '6 - 8 Semanas',
    price: '$3,500 USD',
  },
];

const Planes = () => {
  return (
    <section className="w-full px-4 py-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">
        Nuestros Planes de Data Analytics
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
                <MdOutlineAnalytics />
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

export default Planes;
