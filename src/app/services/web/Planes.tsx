'use client';

import { motion } from 'framer-motion';
import Plan from '../pagesContent/Plan';
import Link from 'next/link';

interface PlanData {
  id: string;
  title: string;
  description: string;
  details: Record<string, string>;
  features: Record<string, string>;
}

const planesData: PlanData[] = [
  {
    id: '7',
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
    features: {
      'Cantidad de Páginas': '1',
      'Plazo de Entrega': '3 - 5 Semanas',
      Precio: '$500 USD',
      'Soporte Incluido': '1 mes',
    },
  },
  {
    id: '8',
    title: 'Web Premium',
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
    features: {
      'Cantidad de Páginas': '4',
      'Plazo de Entrega': '7 - 14 Semanas',
      Precio: '$900 USD',
      'Soporte Incluido': '3 meses',
    },
  },
  {
    id: '9',
    title: 'Web Empresarial',
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
    features: {
      'Cantidad de Páginas': '6+',
      'Plazo de Entrega': '8 - 21 Semanas',
      Precio: '$1900 -  $2500 USD',
      'Soporte Incluido': '6 meses',
    },
  },
];

const Planes = () => {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden mt-10">
      {/* Se agrega pointer-events-none para que este fondo no capture los clics */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02] pointer-events-none bg-[url('/grid.svg')] bg-repeat" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
          >
            Desarrollo Web Profesional
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transformamos tu visión digital en realidades interactivas con
            tecnología de punta y diseño innovador
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {planesData.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Plan
                title={plan.title}
                description={plan.description}
                details={plan.details}
                features={plan.features}
                colorScheme={
                  index === 0
                    ? 'primary'
                    : index === 1
                    ? 'premium'
                    : 'enterprise'
                }
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            ¿Buscas algo personalizado o tienes necesidades específicas?
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Agenda una Consultoría Gratuita
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Planes;
