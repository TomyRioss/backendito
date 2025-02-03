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
    title: 'Software de Escritorio Básico',
    description:
      'Ideal para pequeñas empresas o emprendedores que requieren una solución de software de escritorio sencilla y funcional.',
    details: {
      'Compatibilidad con Windows y macOS': '✅',
      'Interfaz Personalizada': '✅',
      'Soporte Técnico Básico': '❌',
      'Actualizaciones Incluidas': '❌',
      'Integración con APIs': '❌',
      'Optimización de Rendimiento': '✅',
    },
    features: {
      'Licencias Incluidas': '1',
      'Tiempo de Desarrollo': '3 - 4 Semanas',
      Precio: 'AR $350.000 / $350 USD',
      'Soporte Post-Lanzamiento': '1 mes',
    },
  },
  {
    id: '8',
    title: 'Software de Escritorio Premium',
    description:
      'Ideal para empresas en crecimiento que buscan una solución robusta y escalable, con mayor personalización y soporte técnico.',
    details: {
      'Compatibilidad con Windows y macOS': '✅',
      'Interfaz Personalizada Avanzada': '✅',
      'Soporte Técnico Premium': '✅',
      'Actualizaciones Incluidas': '❌',
      'Integración con APIs': '✅',
      'Optimización de Rendimiento': '✅',
    },
    features: {
      'Licencias Incluidas': '3',
      'Tiempo de Desarrollo': '5 - 7 Semanas',
      Precio: 'AR $750.000 / $750 USD',
      'Soporte Post-Lanzamiento': '3 meses',
    },
  },
  {
    id: '9',
    title: 'Software de Escritorio Empresarial',
    description:
      'La solución integral para grandes empresas que demandan sistemas robustos, escalables y con soporte completo.',
    details: {
      'Compatibilidad con Windows y macOS': '✅',
      'Interfaz Diseñada a Medida': '✅',
      'Soporte Técnico Dedicado': '✅',
      'Actualizaciones Incluidas': '✅',
      'Integración con APIs y Sistemas Legados': '✅',
      'Optimización de Rendimiento Avanzada': '✅',
    },
    features: {
      'Licencias Incluidas': 'Ilimitado',
      'Tiempo de Desarrollo': '8 - 10 Semanas',
      Precio: 'AR $1.250.000 / $1,250 USD',
      'Soporte Post-Lanzamiento': '6 meses',
    },
  },
];

const PlanesDesktop = () => {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden mt-10">
      {/* Se agrega pointer-events-none para que el fondo no capture clics */}
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
            Desarrollo de Software para Desktop
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones nativas y personalizadas para Windows y macOS, diseñadas
            para potenciar tu negocio.
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
            ¿Necesitas una solución a la medida o tienes requerimientos
            específicos?
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

export default PlanesDesktop;
