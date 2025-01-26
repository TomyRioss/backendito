import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import cardsLogic from './cardsLogic';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {cardsLogic.map(card => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div
              className="absolute -inset-0.5 bg-cyan-200 dark:bg-gray-700 rounded-2xl
              opacity-50 group-hover:opacity-100 transition duration-300
              blur-sm group-hover:blur-lg"
            ></div>

            <div
              className="relative flex flex-col md:flex-row items-center
              bg-white dark:bg-gray-800/80 rounded-2xl shadow-2xl
              overflow-hidden border border-gray-100 dark:border-gray-700
              hover:border-cyan-200 dark:hover:border-cyan-800
              transition-all duration-300 p-6 gap-8"
            >
              {/* Image Section */}
              <div
                className="w-48 h-48 shrink-0 rounded-2xl overflow-hidden
                shadow-lg transform group-hover:scale-105 transition duration-300"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {card.title}
                  </h2>
                  <a
                    href={card.path}
                    className="text-cyan-600 dark:text-cyan-400
                    hover:underline text-lg font-medium"
                  >
                    Obtén detalles
                  </a>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {card.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Price Dialog */}
                  <AlertDialog>
                    <AlertDialogTrigger
                      className="w-full bg-cyan-500 dark:bg-cyan-700
                      text-white font-semibold py-3 rounded-lg
                      hover:bg-cyan-600 dark:hover:bg-cyan-800
                      transition-colors duration-300
                      flex items-center justify-center space-x-2"
                    >
                      <span>Precio desde: {card.price}</span>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Somos flexibles</AlertDialogTitle>
                        <AlertDialogDescription>
                          Tenemos servicios desde este precio, dependiendo cuál
                          sea tu proyecto variamos nuestros precios para que
                          sean acordes a cualquier necesidad u proyecto
                          existente.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>
                          <a href="/contact">Contactar</a>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  {/* Timeout Dialog */}
                  <AlertDialog>
                    <AlertDialogTrigger
                      className="w-full bg-cyan-500 dark:bg-cyan-700
                      text-white font-semibold py-3 rounded-lg
                      hover:bg-cyan-600 dark:hover:bg-cyan-800
                      transition-colors duration-300
                      flex items-center justify-center space-x-2"
                    >
                      <span>Plazo: {card.timeout}</span>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Nos ajustamos a tus necesidades
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Nuestros plazos de entrega son flexibles y se ajustan
                          según la complejidad del proyecto y tus necesidades
                          específicas.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>
                          <a href="/contact">Contactar</a>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
