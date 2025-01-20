'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';

const WorkInfo = () => {
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
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold  mb-6 text-gray-800">
        ¿Cómo trabajamos?
      </h2>
      <Separator className="my-4 bg-gray-300 h-1" />
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        {/* Texto explicativo */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Primero, luego de obtener todos los detalles, confirmar nuestra
            disponibilidad y recibir la confirmación del cliente, comenzamos la
            organización del proyecto por medio de Trello, para repartir de
            forma eficiente las tareas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Planificamos las tecnologías a utilizar y, una vez decididas entre
            el equipo, las informamos al cliente para recibir su confirmación.
            Luego, iniciamos el desarrollo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Desarrollamos las páginas web con equipos altamente comunicados y
            especializados. Mantenemos contacto constante con el cliente,
            organizamos reuniones periódicas y proporcionamos actualizaciones
            sobre el progreso.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Al finalizar el desarrollo, realizamos revisiones de calidad y
            seguridad para garantizar un resultado impecable. Finalmente,
            entregamos la página al cliente, concluyendo el proyecto con
            satisfacción garantizada.
          </p>
        </div>

        {/* Carrusel con barra de progreso */}
        <div
          className="flex overflow-hidden justify-center items-center relative"
          ref={emblaRef}
        >
          <div className="flex w-full max-w-lg mb-10">
            {[
              { src: '/startWeb.png', alt: 'Inicio del proyecto' },
              { src: '/planificationWeb.png', alt: 'Planificación' },
              { src: '/teamWeb.png', alt: 'Trabajo en equipo' },
              { src: '/exampleWeb.png', alt: 'Ejemplo de resultado' },
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
        </div>
      </article>
    </section>
  );
};

export default WorkInfo;
