"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import * as Avatar from "@radix-ui/react-avatar";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function About() {
  return (
    <ScrollArea.Root className="w-full h-screen overflow-hidden">
      <ScrollArea.Viewport className="w-full h-full">
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <FadeIn>
            <section className="py-20 px-4 md:px-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Sobre Nosotros
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Somos una start-up innovadora dedicada a transformar [tu
                industria] con soluciones creativas y tecnología de vanguardia.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="py-16 px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Nuestra misión es [describe tu misión aquí]. Nos esforzamos
                  por [objetivos principales] y estamos comprometidos con
                  [valores clave].
                </p>
              </div>
            </section>
          </FadeIn>

          <section className="py-20 px-4 md:px-6">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">
                Nuestro Equipo
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[...Array(9)].map((_, i) => (
                <FadeIn key={i}>
                  <HoverCard.Root>
                    <HoverCard.Trigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-center cursor-pointer"
                      >
                        <Avatar.Root className="inline-flex items-center justify-center overflow-hidden w-32 h-32 rounded-full">
                          <Avatar.Image
                            src={`/placeholder.svg?height=200&width=200`}
                            alt={`Team Member ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <Avatar.Fallback delayMs={600}>
                            TM{i + 1}
                          </Avatar.Fallback>
                        </Avatar.Root>
                        <h3 className="font-semibold text-lg mt-4">
                          Nombre del Miembro
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Cargo
                        </p>
                      </motion.div>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                      <HoverCard.Content className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                        <p className="text-sm">
                          Breve descripción del miembro del equipo y sus
                          responsabilidades.
                        </p>
                      </HoverCard.Content>
                    </HoverCard.Portal>
                  </HoverCard.Root>
                </FadeIn>
              ))}
            </div>
          </section>

          <FadeIn>
            <section className="py-16 px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Nuestros Valores
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Innovación",
                    "Integridad",
                    "Colaboración",
                    "Excelencia",
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="font-semibold text-xl mb-2">{value}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Descripción breve del valor y cómo se aplica en nuestra
                        start-up.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="py-20 px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">
                Lo que dicen nuestros clientes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    name: "María González",
                    company: "Tech Innovators",
                    text: "Esta start-up ha revolucionado nuestra forma de trabajar. Su innovación y dedicación son incomparables.",
                  },
                  {
                    name: "Carlos Rodríguez",
                    company: "Future Solutions",
                    text: "Increíble equipo y producto. Han superado nuestras expectativas en todos los aspectos.",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="text-lg mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="py-20 px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Únete a Nuestra Aventura
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Estamos siempre buscando mentes brillantes y apasionadas para
                unirse a nuestro equipo. ¿Listo para hacer un impacto?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Ver Oportunidades
              </motion.button>
            </section>
          </FadeIn>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 bg-gray-200 dark:bg-gray-800 transition-colors duration-[160ms] ease-out hover:bg-gray-300 dark:hover:bg-gray-700 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="flex-1 bg-gray-400 dark:bg-gray-600 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
