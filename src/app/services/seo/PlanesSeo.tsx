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
    id: '1',
    title: 'SEO Básico',
    description:
      'Ideal para pequeños proyectos o marcas personales que buscan mejorar su visibilidad en buscadores con estrategias esenciales.',
    details: {
      'Auditoría SEO': '✅',
      'Optimización On-Page': '✅',
      'Investigación de Palabras Clave': '✅',
      'Creación de Contenido SEO': '❌',
      'Link Building': '❌',
      'Análisis de Competencia': '❌',
      'Reportes Mensuales': '❌',
    },
    features: {
      Duración: '1 Mes',
      'Plazo de Entrega': '7 - 10 Días',
      Precio: 'AR$ 25.000 / $25 USD',
      'Soporte Incluido': '1 mes',
    },
  },
  {
    id: '2',
    title: 'SEO Avanzado',
    description:
      'Perfecto para negocios que buscan optimizar su presencia online y mejorar su posicionamiento con estrategias más profundas.',
    details: {
      'Auditoría SEO': '✅',
      'Optimización On-Page': '✅',
      'Investigación de Palabras Clave': '✅',
      'Creación de Contenido SEO': '✅',
      'Link Building': '✅',
      'Análisis de Competencia': '✅',
      'Reportes Mensuales': '❌',
    },
    features: {
      Duración: '3 Meses',
      'Plazo de Entrega': '15 - 20 Días',
      Precio: 'AR$ 75.000 / $75 USD',
      'Soporte Incluido': '3 meses',
    },
  },
  {
    id: '3',
    title: 'SEO Empresarial',
    description:
      'Ideal para empresas consolidadas que buscan una estrategia SEO completa y a largo plazo para un crecimiento sostenido.',
    details: {
      'Auditoría SEO': '✅',
      'Optimización On-Page': '✅',
      'Investigación de Palabras Clave': '✅',
      'Creación de Contenido SEO': '✅',
      'Link Building': '✅',
      'Análisis de Competencia': '✅',
      'Reportes Mensuales': '✅',
    },
    features: {
      Duración: '6 Meses',
      'Plazo de Entrega': '30 - 45 Días',
      Precio: 'AR$ 150.000 / $150 USD',
      'Soporte Incluido': '6 meses',
    },
  },
];

const PlanesSeo = () => {
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

export default PlanesSeo;
