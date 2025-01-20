import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

// Datos dinámicos para los planes
const planesData = [
  {
    title: 'Web Sencilla',
    description:
      'Ideal para pequeños proyectos, marcas personales con funcionalidades básicas.',
    details: {
      'Integración Ecommerce': '❌',
      'Optimización SEO': '❌',
      'Diseño Responsivo': '✅',
      'Dominio Incluido': '❌',
      'Integración de Redes Sociales': '✅',
      'Soporte Multilenguaje': '❌',
      'Backup Automático': '❌',
    },
    pages: '1',
    deliveryTime: '3 - 5 Días',
    price: '$150 USD',
    support: '1 mes',
  },
  {
    title: 'Web Empresarial',
    description:
      'Perfecta para negocios que buscan escalar su presencia en línea, vender productos y gestionar inventarios.',
    details: {
      'Integración Ecommerce': '✅',
      'Optimización SEO': '✅',
      'Diseño Responsivo': '✅',
      'Dominio Incluido': '✅',
      'Integración de Redes Sociales': '✅',
      'Soporte Multilenguaje': '❌',
      'Backup Automático': '❌',
    },
    pages: '4',
    deliveryTime: '7 - 14 Días',
    price: '$500 USD',
    support: '3 meses',
  },
  {
    title: 'Web Premium',
    description:
      'Ideal para negocios consolidados que buscan un sitio profesional con funcionalidades avanzadas, diseño atractivo y SEO perfeccionado.',
    details: {
      'Integración Ecommerce': '✅',
      'Optimización SEO': '✅',
      'Diseño Responsivo': '✅',
      'Dominio Incluido': '✅',
      'Integración de Redes Sociales': '✅',
      'Soporte Multilenguaje': '✅',
      'Backup Automático': '✅',
    },
    pages: '6+',
    deliveryTime: '31 Días',
    price: '$1,200 USD',
    support: '6 meses',
  },
];

const Planes = () => {
  return (
    <section className="w-full px-8 my-20">
      <h2 className="text-2xl font-bold flex justify-center items-center">
        Nuestros Planes de Desarrollo
      </h2>
      <article className="grid grid-cols-3 gap-4 mt-10">
        {planesData.map((plan, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded shadow grid gap-6"
          >
            <h3 className="text-2xl font-bold">{plan.title}</h3>
            <p className="text-gray-600">{plan.description}</p>
            <Separator />
            <h3 className="text-xl font-bold">Características</h3>
            <ul className="mt-2 grid gap-2">
              {Object.entries(plan.details).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span>{key}:</span> <span className="text-xl">{value}</span>
                </li>
              ))}
            </ul>
            <Separator />
            <h3 className="text-xl font-bold">Cantidad de Páginas</h3>
            <h4 className="mt-2">{plan.pages}</h4>
            <Separator />
            <h3 className="text-xl font-bold">Soporte Incluido</h3>
            <h4 className="mt-2">{plan.support}</h4>
            <Separator />
            <h3 className="text-xl font-bold">Plazo de Entrega</h3>
            <h4 className="mt-2">{plan.deliveryTime}</h4>
            <Separator />
            <h3 className="text-xl font-bold">Precio</h3>
            <h4 className="mt-2 text-green-500 text-xl">{plan.price}</h4>
            <div className="grid grid-flow-col grid-cols-2 justify-center items-center w-full mt-10 gap-4">
              <Button>Comprar</Button>
              <Button>Contactar</Button>
            </div>
          </div>
        ))}
      </article>
      <Separator />
    </section>
  );
};

export default Planes;
