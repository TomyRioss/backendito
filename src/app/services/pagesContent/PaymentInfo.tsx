'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';

const PaymentInfo = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();

  const calculateProgress = () => {
    if (emblaApi) {
      const progress = emblaApi.scrollProgress();
      return `${progress * 100}%`;
    }
    return '0%';
  };

  return (
    <section className="py-10 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        ¿Cómo trabajamos?
      </h2>
      <Separator className="my-4 bg-gray-300 dark:bg-gray-600 h-1" />
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        {/* Texto explicativo */}
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
            Para manejar los pagos, primero quedamos en un presupuesto con el
            cliente, y le comentamos las opciones de proyecto que tenemos
            disponible en base a aquello.
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
            Luego establecemos las tareas que se esperan la mitad del proyecto,
            y las que se esperan para la mitad, este paso es escencial, ya que a
            la mitad del proyecto realizamos una reunión de cálidad, dónde sí el
            progreso del proyecto es satisfactorio para el cliente, se paga la
            mitad del valor total del proyecto.
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
            Luego del mismo modo, cuándo esta finalizado, se agenda una reunión
            de cálidad para definir que todo este en orden, una vez que sea
            satisfactorio para el cliente, se paga la otra mitad restante y se
            finaliza el proyecto.
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
            Los usuarios de nuestro sitio web, tienen la opción especial de
            pagar por el valor total de la página en una sola vez por
            adelantado, sin embargo esta cnatidad es almacenada y no es
            repartida hasta que se cumpla el proyecto.
          </p>
        </div>

        {/* Carrusel con barra de progreso */}
        <div
          className="flex overflow-hidden justify-center items-center relative"
          ref={emblaRef}
        >
          <div className="flex w-full max-w-lg mb-10">
            {[
              { src: '/1.png', alt: 'Inicio del proyecto' },
              { src: '/2.png', alt: 'Planificación' },
              { src: '/3.png', alt: 'Trabajo en equipo' },
            ].map((item, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Flechas de navegación */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          >
            &#8592;
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          >
            &#8594;
          </button>

          {/* Barra de progreso */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-300 dark:bg-gray-600 h-1 w-full">
            <div
              className="h-full bg-gray-800 dark:bg-gray-400"
              style={{ width: calculateProgress() }}
            ></div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PaymentInfo;
