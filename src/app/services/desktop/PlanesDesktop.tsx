import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MdOutlineDesktopMac, MdOutlineMessage } from 'react-icons/md';

const planesData = [
  {
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
    price: '$1,000 USD',
  },
  {
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
    price: '$2,500 USD',
  },
  {
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
    price: '$5,000 USD',
  },
];

const PlanesDesktop = () => {
  return (
    <section className="w-full px-4 py-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">
        Nuestros Planes de Desarrollo Desktop
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

export default PlanesDesktop;
