'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import { useTranslations } from 'next-intl';

const WorkInfo = () => {
  const t = useTranslations('landingPage.workInfo');
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();

  return (
    <section className="py-10 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        {t("title")}
      </h2>
      <Separator className="my-4 bg-gray-300 dark:bg-gray-600 h-1" />
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        {/* Texto explicativo */}
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          {t("section1")}
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          {t("section2")}
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          {t("section3")}
          </p>
          <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          {t("section4")}
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
