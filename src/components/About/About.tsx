'use client';

import type * as React from 'react';
import { motion } from 'framer-motion';
import * as Avatar from '@radix-ui/react-avatar';
import {
  featuredPersonnel,
  frontendPersonnel,
  backendPersonnel,
  fullstackPersonnel,
  mobilePersonnel,
} from './aboutPersonnel';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import values from './valuesLogic';
import Link from 'next/link';

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <FadeIn>
        <section className="py-20 px-4 md:px-6 text-center mt-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Sobre Nosotros
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Somos una start-up de Desarrollo Web, damos servicios de desarrollo
            con nuestros equipos de programadores altamente calificados, para
            entregar constantemente código optimizado, responsivo, y de alta
            calidad para todos nuestros clientes.
          </p>
        </section>
      </FadeIn>
      <Separator />
      <FadeIn>
        <section className="py-16 px-4 md:px-6  dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Nuestra misión es brindar a nuestros clientes seguridad y la mayor
              calidad posible en el menor tiempo. Nos esforzamos por conseguir
              esto y estamos comprometidos con siempre dar una atención
              excepcional a nuestros clientes.
            </p>
          </div>
        </section>
      </FadeIn>

      <section className="py-20 px-4 md:px-6">
        <div className="mb-10 bg-yellow-200 dark:bg-yellow-800 p-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Personal Destacado
          </h2>
          <h4 className="text-center text-xl ">
            Ellos ayudaron a programar este sitio web, ¡Gracias!
          </h4>
        </div>
        <div className="flex p-20 gap-36 max-w-6xl mx-auto  ">
          {featuredPersonnel.map(person => (
            <FadeIn key={person.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center cursor-pointer "
              >
                <Avatar.Root className="inline-flex bg-slate-200 dark:bg-gray-700 items-center justify-center overflow-hidden w-32 h-32 rounded-full border-2 border-black">
                  <Avatar.Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Team Member ${person.id + 1}`}
                    className="w-full h-full object-cover "
                  />
                  <Avatar.Fallback delayMs={600}>
                    {person.initials}
                  </Avatar.Fallback>
                </Avatar.Root>
                <h3 className="font-semibold text-lg mt-4">{person.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {person.role}
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-2 mt-6 w-full ">
                {person.portfolio === '' ? (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-red-500 hover:bg-red-600 text-black w-full">
                      Port.
                    </Button>
                  </a>
                ) : (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-cyan-300 hover:bg-cyan-400 text-black w-full">
                      Port.
                    </Button>
                  </a>
                )}

                <a
                  href={person.CV}
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  <Button className="bg-cyan-300 hover:bg-cyan-400 text-black w-full">
                    CV
                  </Button>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mb-10 bg-orange-300 dark:bg-orange-800 p-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Departamento Frontend
          </h2>
          <h4 className="text-center text-xl ">
            Ellos ayudaron a programar este sitio web, ¡Gracias!
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-14 gap-12 max-w-6xl mx-auto mt-20">
          {frontendPersonnel.map(person => (
            <FadeIn key={person.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center cursor-pointer"
              >
                <Avatar.Root className="inline-flex bg-slate-200 dark:bg-gray-700 items-center justify-center overflow-hidden w-32 h-32 rounded-full border-2 border-black">
                  <Avatar.Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Team Member ${person.name}`}
                    className="w-full h-full object-cover"
                  />
                  <Avatar.Fallback delayMs={600}>
                    {person.initials}
                  </Avatar.Fallback>
                </Avatar.Root>
                <h3 className="font-semibold text-lg mt-4">{person.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {person.role}
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-2 mt-6 w-full ">
                <a href={person.CV} target="_blank">
                  <Button className="bg-cyan-300 hover:bg-cyan-400 text-black w-full">
                    CV
                  </Button>
                </a>
                {person.portfolio === '' ? (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-red-500 hover:bg-red-600 text-black w-full">
                      Port.
                    </Button>
                  </a>
                ) : (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-cyan-300 hover:bg-cyan-400 text-black w-full">
                      Port.
                    </Button>
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mb-10 bg-blue-500 dark:bg-blue-800 p-4">
          <h2 className="text-3xl font-bold text-center mb-2 p-4">
            Departamento Backend
          </h2>
          <h4 className="text-center text-xl ">
            Ellos ayudaron a programar este sitio web, ¡Gracias!
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-14 gap-12 max-w-6xl mx-auto mt-20">
          {backendPersonnel.map(person => (
            <FadeIn key={person.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center cursor-pointer"
              >
                <Avatar.Root className="inline-flex bg-slate-200 dark:bg-gray-700 items-center justify-center overflow-hidden w-32 h-32 rounded-full border-2 border-black">
                  <Avatar.Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Team Member ${person.name}`}
                    className="w-full h-full object-cover"
                  />
                  <Avatar.Fallback delayMs={600}>
                    {person.initials}
                  </Avatar.Fallback>
                </Avatar.Root>
                <h3 className="font-semibold text-lg mt-4">{person.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {person.role}
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-2 mt-6 w-full ">
                {person.portfolio === '' ? (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-red-500 hover:bg-red-600 text-black w-full">
                      Port.
                    </Button>
                  </a>
                ) : (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-cyan-300 hover:bg-cyan-400 text-black w-full">
                      Port.
                    </Button>
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mb-10 bg-purple-400 dark:bg-purple-800">
          <h2 className="text-3xl font-bold text-center mb-2 p-4">
            Departamento Fullstack
          </h2>
          <h4 className="text-center text-xl ">
            Ellos ayudaron a programar este sitio web, ¡Gracias!
          </h4>
        </div>
        <div className="flex justify-center items-center  p-14 gap-36 max-w-6xl mx-auto mt-20">
          {fullstackPersonnel.map(person => (
            <FadeIn key={person.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center cursor-pointer"
              >
                <Avatar.Root className="inline-flex bg-slate-200 dark:bg-gray-700 items-center justify-center overflow-hidden w-32 h-32 rounded-full border-2 border-black">
                  <Avatar.Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Team Member ${person.name}`}
                    className="w-full h-full object-cover"
                  />
                  <Avatar.Fallback delayMs={600}>
                    {person.initials}
                  </Avatar.Fallback>
                </Avatar.Root>
                <h3 className="font-semibold text-lg mt-4">{person.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {person.role}
                </p>
              </motion.div>

              {person.portfolio === '' ? (
                <a
                  href={person.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-500 hover:bg-red-600 text-black w-full">
                    Port.
                  </Button>
                </a>
              ) : (
                <a
                  href={person.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-cyan-300 hover:bg-cyan-400 text-black w-full">
                    Port.
                  </Button>
                </a>
              )}
            </FadeIn>
          ))}
        </div>

        <div className="mb-10 bg-green-400 dark:bg-green-800">
          <h2 className="text-3xl font-bold text-center mb-2 p-4">
            Departamento Mobile
          </h2>
          <h4 className="text-center text-xl ">
            Ellos ayudaron a programar este sitio web, ¡Gracias!
          </h4>
        </div>
        <div className="flex justify-center items-center p-14 gap-36 max-w-6xl mx-auto mt-20">
          {mobilePersonnel.map(person => (
            <FadeIn key={person.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center cursor-pointer"
              >
                <Avatar.Root className="inline-flex bg-slate-200 dark:bg-gray-700 items-center justify-center overflow-hidden w-32 h-32 rounded-full border-2 border-black">
                  <Avatar.Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Team Member ${person.name}`}
                    className="w-full h-full object-cover"
                  />
                  <Avatar.Fallback delayMs={600}>
                    {person.initials}
                  </Avatar.Fallback>
                </Avatar.Root>
                <h3 className="font-semibold text-lg mt-4">{person.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {person.role}
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-2 mt-6 w-full ">
                <a href={person.CV} target="_blank">
                  <Button className="bg-cyan-300 hover:bg-cyan-400 text-black w-full">
                    CV
                  </Button>
                </a>
                {person.portfolio === '' ? (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-red-500 hover:bg-red-600 text-black w-full">
                      Port.
                    </Button>
                  </a>
                ) : (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-cyan-300 hover:bg-cyan-400 text-black w-full">
                      Port.
                    </Button>
                  </a>
                )}
              </div>
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
              {values.map(value => (
                <motion.div
                  key={value.id}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
