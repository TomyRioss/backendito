<<<<<<< HEAD
import React from "react";
import cardsLogic from "./cardsLogic";
import Image from "next/image";
import Link from "next/link";
=======
import React from 'react';
>>>>>>> 91c84e1763d32eead974b4fbf036f7dfe24a54e8
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
<<<<<<< HEAD
} from "@/components/ui/alert-dialog";

=======
} from '@/components/ui/alert-dialog';
import cardsLogic from './cardsLogic';
import Image from 'next/image';
>>>>>>> 91c84e1763d32eead974b4fbf036f7dfe24a54e8

const Cards = () => {
  // Ejemplo de datos para demostración

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
<<<<<<< HEAD
      <div className="flex flex-col gap-4 w-full p-10">
        {cardsLogic.map((card) => (
=======
      <div className="flex flex-col gap-4 w-full p-4 sm:p-6 md:p-8 lg:p-10">
        {cardsLogic.map(card => (
>>>>>>> 91c84e1763d32eead974b4fbf036f7dfe24a54e8
          <div
            key={card.id}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16 p-4 sm:p-6 md:p-8
            mx-2 sm:mx-4 md:mx-6 lg:mx-10 bg-cyan-100 dark:bg-gray-900 rounded-md border-2
            border-gray-700 shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            {/* Placeholder para la imagen */}
            <div
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56
               rounded-lg flex items-center justify-center
              overflow-hidden flex-shrink-0"
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={750}
                height={750}
              />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-gray-300">
                  {card.title}
                </h2>
                <a
                  href={card.path}
                  className="inline-block underline text-blue-600 hover:text-blue-700"
                >
                  Obtén detalles
                </a>
                <p className="mt-2 text-sm sm:text-base text-black dark:text-white">
                  {card.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                {/* Botón de Precio */}
                <AlertDialog>
                  <AlertDialogTrigger
                    className="w-full bg-blue-400 dark:bg-cyan-600
                    hover:bg-blue-500 dark:hover:bg-cyan-700 text-white p-3 sm:p-4
                    rounded-md text-sm sm:text-base transition-colors"
                  >
                    Precio: {card.price}
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-lg mx-4 dark:bg-slate-900">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-lg sm:text-xl dark:text-white">
                        Somos flexibles
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-sm sm:text-base dark:text-white">
                        Tenemos servicios desde este precio, dependiendo cuál
                        sea tu proyecto variamos nuestros precios para que sean
                        acordes a cualquier necesidad u proyecto existente.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                      <AlertDialogCancel className="dark:bg-slate-300 dark:hover:bg-slate-400">
                        Cancelar
                      </AlertDialogCancel>
                      <AlertDialogAction
                        className="w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-4
                        text-base sm:text-lg bg-green-500 hover:bg-green-600"
                      >
                        <a href="/contact">Contactar</a>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {/* Botón de Plazo */}
                <AlertDialog>
                  <AlertDialogTrigger
                    className="w-full bg-blue-400 dark:bg-cyan-600
                    hover:bg-blue-500 dark:hover:bg-cyan-700 text-white p-3 sm:p-4
                    rounded-md text-sm sm:text-base transition-colors"
                  >
                    Plazo: {card.timeout}
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-lg mx-4 dark:bg-slate-900">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-lg sm:text-xl dark:text-white">
                        Nos ajustamos a tus necesidades
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-sm sm:text-base dark:text-white">
                        Nuestros plazos de entrega son flexibles y se ajustan
                        según la complejidad del proyecto y tus necesidades
                        específicas.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                      <AlertDialogCancel className="dark:bg-slate-300 dark:hover:bg-slate-400">
                        Cancelar
                      </AlertDialogCancel>
                      <AlertDialogAction
                        className="w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-4
                        text-base sm:text-lg bg-green-500 hover:bg-green-600"
                      >
                        <a href="/contact">Contactar</a>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
