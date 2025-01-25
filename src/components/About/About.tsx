'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import * as Avatar from '@radix-ui/react-avatar';
import {
  featuredPersonnel,
  frontendPersonnel,
  backendPersonnel,
  fullstackPersonnel,
  mobilePersonnel,
  staffPersonnel,
} from './aboutPersonnel';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

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

const PersonCard = ({ person, color }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group ${color}`}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="p-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <Avatar.Root className="flex w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg mb-4 justify-center items-center ">
            <Avatar.Image
              src="/placeholder.svg?height=200&width=200"
              alt={`Team Member ${person.name}`}
              className="w-full h-full object-cover"
            />
            <Avatar.Fallback className=" text-dark dark:text-white flex items-center justify-center font-bold p-4 rounded-xl">
              {person.initials}
            </Avatar.Fallback>
          </Avatar.Root>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {person.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {person.role}
          </p>

          <div className="flex space-x-2 w-full">
            <a
              href={person.CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                CV
              </Button>
            </a>
            {person.portfolio && (
              <a
                href={person.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Portafolio
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${
          isHovered ? 'bg-gradient-to-br from-blue-500 to-purple-500' : ''
        }`}
      ></div>
    </motion.div>
  );
};

export default function About() {
  const t = useTranslations('aboutUs');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-light">
      <FadeIn>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-4 md:px-10 text-center md:text-left items-center max-w-7xl mx-auto mt-10 ">
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-3/4 ">
            <h2 className="text-lg font-mono text-gray-500 mb-2 self-start dark:text-white">
              {t('header')}
            </h2>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900 mb-4 dark:text-white">
              {t('headerTitle')}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed dark:text-white">
              {t('description')}
            </p>
          </div>
          <div className="flex justify-center md:justify-end w-full ">
            <Image
              src={'/personnel.svg'}
              alt="personnel"
              width={400}
              height={400}
            />
          </div>
        </section>
      </FadeIn>

      <Separator />

      <section className="py-20 px-4 md:px-6">
        {[
          {
            title: t('departments.starredPersonnel'),
            personnel: featuredPersonnel,
            description: t('departments.starredPersonnelInfo'),
            color: 'border-l-4 border-yellow-500 hover:border-yellow-600',
            index: 0,
          },
          {
            title: 'Staff',
            personnel: staffPersonnel,
            description: t('departments.staffInfo'),
            color: 'border-l-4 border-blue-500 hover:border-blue-600',
            index: 1,
          },

          {
            title: t('departments.frontendTitle'),
            personnel: frontendPersonnel,
            description: t('departments.frontend'),
            color: 'border-l-4 border-orange-500 hover:border-orange-600',
            index: 1,
          },
          {
            title: t('departments.backendTitle'),
            personnel: backendPersonnel,
            description: t('departments.backend'),
            color: 'border-l-4 border-blue-500 hover:border-blue-600',
            index: 2,
          },
          {
            title: t('departments.fullstackTitle'),
            personnel: fullstackPersonnel,
            description: t('departments.fullstack'),
            color: 'border-l-4 border-purple-500 hover:border-purple-600',
            index: 3,
          },
          {
            title: t('departments.mobileTitle'),
            personnel: mobilePersonnel,
            description: t('departments.mobile'),
            color: 'border-l-4 border-green-500 hover:border-green-600',
            index: 4,
          },
        ].map((section, index) => (
          <React.Fragment key={index}>
            <h2 className="text-3xl font-bold text-left pl-16 mb-2 ">
              {section.title}
            </h2>
            <h4 className="text-left pl-16 text-xl">{section.description}</h4>
            <div
              className={`grid grid-cols-1 md:grid-cols-3 p-14 gap-12 max-w-6xl mx-auto`}
            >
              {section.personnel.map(person => (
                <FadeIn key={person.id}>
                  <PersonCard person={person} color={section.color} />
                </FadeIn>
              ))}
            </div>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}
