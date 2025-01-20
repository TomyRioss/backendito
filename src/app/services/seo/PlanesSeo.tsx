import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MdOutlineDesktopMac, MdOutlineMessage } from 'react-icons/md';

const planesData = [
  {
    title: 'Consultoría SEO Básica',
    description:
      'Ideal para sitios web pequeños o startups que buscan optimización inicial y un análisis básico de SEO.',
    details: {
      'Análisis de Palabras Clave': '✅',
      'Auditoría SEO Inicial': '✅',
      'Optimización On-Page': '✅',
      'Informe Semanal de Progreso': '✅',
      'Optimización de Contenidos': '❌',
      'Enlace Interno y Externo': '❌',
    },
    deliveryTime: '1 - 2 Semanas',
    price: '$800 USD',
  },
  {
    title: 'Consultoría SEO Avanzada',
    description:
      'Perfecto para negocios que necesitan una optimización profunda, estrategia a largo plazo y seguimiento continuo.',
    details: {
      'Análisis Profundo de Competencia': '✅',
      'Auditoría SEO Completa': '✅',
      'Optimización Avanzada On-Page y Off-Page': '✅',
      'Informe Mensual Detallado': '✅',
      'Optimización de Contenidos': '✅',
      'Enlace Interno, Externo y Guest Blogging': '✅',
    },
    deliveryTime: '3 - 4 Semanas',
    price: '$1,500 USD',
  },
  {
    title: 'Consultoría SEO Empresarial',
    description:
      'Diseñado para grandes empresas o sitios web complejos que requieren soluciones integrales y personalizadas para mejorar su presencia en buscadores.',
    details: {
      'Análisis Estratégico a Largo Plazo': '✅',
      'Auditoría SEO Completa y Mantenimiento': '✅',
      'Optimización Completa de Contenidos': '✅',
      'Enlace Seguros y Link Building Avanzado': '✅',
      'Soporte Técnico Dedicado': '✅',
      'Optimización del Rendimiento y Seguridad': '✅',
    },
    deliveryTime: '6 - 8 Semanas',
    price: '$3,000 USD',
  },
];

const PlanesSeo = () => {
  return (
    <section className="w-full px-4 py-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">
        Soluciones Personalizadas en Consultoría SEO
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planesData.map((plan, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
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
            <p className="text-xs text-gray-500 mb-4">
              ¡Aprovecha este precio exclusivo! Contáctanos para más detalles.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button className="flex justify-center items-center gap-2">
                <MdOutlineDesktopMac />
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

export default PlanesSeo;
