'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';

const WorkInfo = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0); // eslint-disable-line
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      onScroll();
    });
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  const carouselSlides = [
    {
      src: '/startWeb.png',
      alt: 'Reunión inicial de planificación de proyecto web',
    },
    {
      src: '/planificationWeb.png',
      alt: 'Proceso de diseño y wireframing de página web',
    },
    {
      src: '/teamWeb.png',
      alt: 'Equipo colaborando en desarrollo frontend y backend',
    },
    { src: '/exampleWeb.png', alt: 'Ejemplo de página web moderna terminada' },
  ];

  const faqItems = [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto?',
      answer:
        'El tiempo varía según complejidad, pero nuestros proyectos promedio toman entre 2 días a 3 semanas. Siempre proporcionamos una estimación detallada tras el análisis inicial.',
    },
    {
      question: '¿Qué metodologías de desarrollo utilizan?',
      answer:
        'Trabajamos con Agile/Scrum, implementando sprints con entregables constantes y reuniones de revisión.',
    },
    {
      question: '¿Incluyen servicio de hosting y mantenimiento?',
      answer:
        'Ofrecemos paquetes completos que incluyen hosting optimizado, SSL, CDN y mantenimiento mensual con actualizaciones de seguridad.',
    },

    {
      question: '¿Qué método de pago puedo usar?',
      answer:
        'Aceptamos pagos vía MercadoPago, Paypal. Binance y transferencias bancarias.',
    },
    {
      question: '¿Dónde están ubicados?',
      answer:
        'Nuestro equipo trabaja de forma remota desde toda latinoamérica, pero nuestra empresa está ubicada en Argentina, así mismo todos los pagos y gestión de proyectos se realizan en Argentina.',
    },
    {
      question: '¿Qué lenguajes de programación y tecnologías utilizan?',
      answer:
        'Nuestro equipo tiene experiencia en una amplia gama de tecnologías, incluyendo JavaScript, TypeScript, Python, Java, C#, y frameworks como React, Angular, y Django. Esto nos permite abordar una variedad de proyectos y adaptarnos a las necesidades específicas de cada cliente.',
    },
    {
      question: '¿Ofrecen soporte post-lanzamiento?',
      answer:
        'Sí, ofrecemos soporte post-lanzamiento para asegurar que tu proyecto funcione sin problemas. Esto incluye corrección de errores, actualizaciones menores y asistencia técnica. Nuestro objetivo es garantizar que tu proyecto siga siendo funcional y eficiente después de su lanzamiento.',
    },
    {
      question: '¿Cómo garantizan la calidad del código?',
      answer:
        'Implementamos revisiones de código, pruebas automatizadas y manuales, y seguimos las mejores prácticas de desarrollo para asegurar la calidad del código. Además, utilizamos herramientas de integración continua y despliegue continuo (CI/CD) para detectar y corregir problemas rápidamente, asegurando que el código sea robusto y mantenible.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transparencia y excelencia en cada etapa del desarrollo web
          </p>
        </div>

        <Separator className="my-8 bg-gray-200 dark:bg-gray-700 h-0.5" />

        {/* Contenido principal */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-12">
          {/* Carrusel mejorado */}
          <div className="relative group">
            <div
              className="overflow-hidden rounded-2xl shadow-2xl"
              ref={emblaRef}
            >
              <div className="flex">
                {carouselSlides.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-[500px]"
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6">
                      <p className="text-white text-sm font-medium">
                        {item.alt} - Paso {index + 1} de {carouselSlides.length}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles del carrusel */}
            <div className="flex items-center justify-center mt-6 space-x-4">
              <button
                onClick={scrollPrev}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Diapositiva anterior"
              >
                <span className="text-2xl">←</span>
              </button>

              <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              <button
                onClick={scrollNext}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Siguiente diapositiva"
              >
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>

          {/* Texto explicativo mejorado */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  1. Planificación Estratégica
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Realizamos workshops colaborativos para entender tus
                  necesidades, definimos puntos clave y creamos una hoja de ruta
                  detallada con hitos verificables.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  2. Desarrollo Ágil
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Implementación modular con sprints, usando tecnologías líderes
                  como Next.js, TypeScript y Tailwind. Revisiones semanales y
                  deployments automáticos.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
                  3. Control de Calidad
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Pruebas automatizadas, auditorías de performance (Lighthouse)
                  y revisiones de seguridad. Optimización para SEO técnico y
                  accesibilidad.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Sección FAQ */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            Preguntas Frecuentes
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 grid grid-cols-2 gap-4 items-center justify-between max-h-full mb-10 "
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <AccordionTrigger className="flex justify-between items-center w-full p-6 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-xl transition-colors">
                  <span className="text-left font-medium text-gray-700 dark:text-gray-200">
                    {item.question}
                  </span>
                  <span className="text-2xl ml-4">+</span>
                </AccordionTrigger>

                <AccordionContent className="p-6 pt-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded-b-xl">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WorkInfo;
