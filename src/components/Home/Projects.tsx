'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';
import Image from 'next/image';

// Datos de ejemplo actualizados con calificaciones y testimonios
const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'Landing Page Wordpress ',
    description: 'Corrección de errores en Landing Page de Wordpress.',
    image: '/minecomunidad.png',
    category: 'Wordpress',
    technologies: ['Wordpress', 'Javascript', 'CSS'],
    rating: 5,
    testimonial: {
      quote:
        'Perfecto, me alegra mucho tu compromiso, espero tu proyecto crezca, es por eso también que quiero hacer esta otra comisión contigo.',
      author: 'CEO Minecomunidad',
    },
  },
  {
    id: 2,
    title: 'Dashboard Trabajos',
    description:
      'Dashboard para gestionar reuniones en una aplicación que conecta empleados y empleadores.',
    image: '/enmerson.png',
    category: 'Dashboard',
    technologies: ['React', 'Create.xyz', 'Supabase'],
    rating: 5,
    testimonial: {
      quote:
        'Encantado de trabajar con vosotros porque al final me vale la pena tener expertos acompañándome, porque ahorro tiempo y al mismo tiempo aprendo.',
      author: 'Emerson Vigoureux, CO-Fundador',
    },
  },
  {
    id: 3,
    title: 'Radio Ibiza Mantenimiento',
    description:
      'Se corrigen errores que se producen entre librerías y un rediseño del Frontend.',
    image: '/radioibiza.png',
    category: 'En Progreso',
    technologies: ['React Native', 'Streaming'],
    rating: 5,
    testimonial: {
      quote:
        '¡Aún trabajamos en este proyecto y es una experiencia grandiosa!.',
      author: 'Tomas Rios, CEO Backendito',
    },
  },
  {
    id: 4,
    title: 'BloxyFruits Integraciones',
    description:
      'Se realizan integraciones en el flujo de pago y en el bot de la aplicación web..',
    image: '/bloxyfruits.png',
    category: 'En Progreso',
    technologies: ['Svelte', 'MongoDB', 'Roblox API'],
    rating: 5,
    testimonial: {
      quote:
        '¡Aún trabajamos en este proyecto y es una experiencia grandiosa!.',
      author: 'Tomas Rios, CEO Backendito',
    },
  },
];

// Componente para mostrar la calificación en estrellas
const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      )}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-yellow-400" />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Configuración para gestos táctiles
  const minSwipeDistance = 50;

  // Agrupar proyectos en pares (2 proyectos por slide)
  const projectGroups = [
    [0, 1], // Primera página: proyectos 0 y 1
    [2, 3], // Segunda página: proyectos 2 y 3
  ];

  const totalGroups = projectGroups.length;

  // Navegación del carrusel
  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalGroups);
  }, [totalGroups]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalGroups) % totalGroups);
  }, [totalGroups]);

  // Navegación a un índice específico
  const goToSlide = useCallback(index => {
    setCurrentIndex(index);
  }, []);

  // Gestión de eventos táctiles
  const onTouchStart = useCallback(e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback(e => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  }, [touchStart, touchEnd, minSwipeDistance, nextSlide, prevSlide]);

  return (
    <div className="w-full py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto w-full px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div
          className="relative overflow-hidden rounded-xl shadow-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Flechas de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
            aria-label="Anterior proyecto"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
            aria-label="Siguiente proyecto"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectGroups.map((group, groupIndex) => (
              <div
                key={`group-${groupIndex}`}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
              >
                {group.map(projectIndex => {
                  const project = FEATURED_PROJECTS[projectIndex];
                  return (
                    <Card
                      key={project.id}
                      className="flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* Imagen en la mitad superior */}
                      <div className="relative h-64 w-full overflow-hidden group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-medium px-3 py-1">
                          {project.category}
                        </Badge>
                      </div>

                      {/* Contenido en la mitad inferior */}
                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <RatingStars rating={project.rating} />
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map(tech => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <blockquote className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 italic text-gray-700 dark:text-gray-300 text-sm">
                          &ldquo;{project.testimonial.quote}&rdquo;
                          <footer className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">
                            &mdash; {project.testimonial.author}
                          </footer>
                        </blockquote>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de slides (solo 2) */}
        <div className="flex justify-center gap-4 mt-8">
          {[0, 1].map(index => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-3 bg-primary rounded-full'
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full'
              }`}
              aria-label={`Ir a la página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
