import React from "react";
import cardsLogic from "./cardsLogic";
import Image from "next/image";
import Link from "next/link";
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
} from "@/components/ui/alert-dialog";


const Cards = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <div className="flex flex-col gap-4 w-full p-10">
        {cardsLogic.map((card) => (
          <div
            key={card.id}
            className="flex items-center gap-16 p-8 mx-10  bg-cyan-100 dark:bg-gray-900 rounded-md border-2 border-gray-700 shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <Image
              src={card.icon}
              alt={`${card.title} icon`}
              width={500}
              height={500}
              className="rounded-full"
            />
            <div className="flex flex-col gap-4 ">
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-gray-300">
                  {card.title}
                </h2>
                <Link href={card.path}>
                  <span className="underline text-blue-600 hover:text-blue-700">
                    Obten detalles.
                  </span>
                </Link>
                <p className=" mt-2 text-black dark:text-white">
                  {card.description}
                </p>
              </div>
              <div className="grid grid-flow-row-1 grid-cols-2 gap-4 mt-6">
                <div className="flex justify-center items-center bg-blue-400 dark:bg-cyan-600 hover:bg-blue-500 dark:hover:bg-cyan-700 w-full p-4 rounded-md">
                  <AlertDialog>
                    <AlertDialogTrigger className="w-full text-center text-white k">
                      Precio: {card.price}
                    </AlertDialogTrigger>
                    <AlertDialogContent className="dark:bg-slate-900">
                      <AlertDialogHeader className="dark:bg-slate-900">
                        <AlertDialogTitle className="dark:text-white">
                          Somos flexibles.
                        </AlertDialogTitle>
                        <AlertDialogDescription className="dark:text-white">
                          Tenemos servicios desde este precio, dependiendo cuál
                          sea tú proyecto varíamos nuestros precios para que
                          sean acorde a cualquiér necesidad u proyecto
                          existente. Si tienes un proyecto más personalizado o
                          tener un presupuesto difereten, podes contactarte a
                          nostros para que te demos un servicio personalizado
                          para tu presupuesto y proyecto.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="dark:bg-slate-300 dark:hover:bg-slate-400">
                          Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction className="w-full px-8 py-4 text-lg bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600">
                          <Link href="/contact">Contactar</Link>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
                <div className="flex justify-center items-center bg-blue-400 dark:bg-cyan-600 hover:bg-blue-400 dark:hover:bg-cyan-700 w-full p-4 rounded-md">
                  <AlertDialog>
                    <AlertDialogTrigger className="w-full text-center text-white">
                      Plazo: {card.timeout}
                    </AlertDialogTrigger>
                    <AlertDialogContent className="dark:bg-slate-900">
                      <AlertDialogHeader className="dark:bg-slate-900">
                        <AlertDialogTitle className="dark:text-white">
                          Nos ajustamos a tus necesidades.
                        </AlertDialogTitle>
                        <AlertDialogDescription className="dark:text-white">
                          Nuestros plazos de entrega van desde 3 a 5 días,
                          incrementando según la complejidad del proyecto, somos
                          flexibles con las necesidades de cada cliente, sí
                          necesitas el proyecto con urgencia, asignaremos a un
                          equipo mayor para que puedas tener tu proyecto en un
                          plazo más corto, y sí el presupuesto es corto,
                          aumentamos el plazo para que los programadores
                          trabajen en otros proyectos al mismo tiempo,
                          ajustandose a cualquier necesidad, si tienes un plazo
                          personalizado, contactanos para darte una cotización
                          diferente y tener en cuenta tus necesidades.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="dark:bg-slate-300 dark:hover:bg-slate-400">
                          Cancelar
                        </AlertDialogCancel>
                        <Link href="/contact">
                          <AlertDialogAction className="w-full px-8 py-4 text-lg bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600">
                            Contactar
                          </AlertDialogAction>
                        </Link>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
