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
import { ArrowRight, Phone, Users, Code, Star } from 'lucide-react';

const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);
// eslint-disable-next-line
const PersonCard = ({ person, color }) => {
  // eslint-disable-next-line
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Ambient card background */}
      <div className="absolute -inset-px rounded-xl transition-all duration-500 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-100 blur-md" />

      <div className="relative rounded-xl overflow-hidden bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl transition-colors duration-500">
        <div className="p-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <Avatar.Root className="relative flex w-32 h-32 rounded-full mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500 rounded-full blur opacity-20" />
              <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full" />
              <Avatar.Fallback className="relative left-12 text-slate-900 dark:text-white flex items-center justify-center font-bold text-2xl">
                {person.initials}
              </Avatar.Fallback>
            </Avatar.Root>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {person.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-blue-200/80 mb-6">
              {person.role}
            </p>

            <div className="flex space-x-3 w-full">
              <a
                href={person.CV}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-500 dark:to-blue-500 hover:opacity-90 text-white shadow-lg shadow-cyan-200/50 dark:shadow-cyan-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition duration-300">
                  Ver CV
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              {person.portfolio && (
                <a
                  href={person.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 hover:opacity-90 text-white shadow-lg shadow-purple-200/50 dark:shadow-purple-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition duration-300">
                    Portafolio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-gradient-to-br from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 opacity-15 dark:opacity-20 blur-2xl transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-gradient-to-tr from-pink-300 to-purple-300 dark:from-pink-500 dark:to-purple-500 opacity-15 dark:opacity-20 blur-2xl transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

const DepartmentHeader = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col space-y-4 mb-12">
    <div className="flex items-center space-x-3">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20">
        <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
    </div>
    <p className="text-lg text-slate-600 dark:text-blue-200/80 max-w-3xl">
      {description}
    </p>
  </div>
);

export default function About() {
  const t = useTranslations('aboutUs');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      {/* Hero Section */}
      <FadeIn>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Ambient background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent dark:via-indigo-500/50" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-white dark:via-blue-200 dark:to-indigo-200 mb-6">
                  {t('headerTitle')}
                </h1>
                <p className="text-lg text-slate-600 dark:text-blue-200/80 leading-relaxed mb-8">
                  {t('description')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a href="#team">
                    <Button className="bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500 text-white shadow-lg shadow-indigo-200/50 dark:shadow-indigo-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition duration-300">
                      Conoce al equipo
                      <Users className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a href="/contact">
                    <Button className="bg-white dark:bg-white/10 text-slate-700 dark:text-white border border-slate-200 dark:border-white/10 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] transition duration-300">
                      Contáctanos
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-600/30 dark:from-indigo-600/20 dark:to-purple-900/40 rounded-2xl blur-2xl" />
                <Image
                  src="/personnel.svg"
                  alt="Nuestro equipo"
                  width={600}
                  height={400}
                  className="relative rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <Separator className="max-w-7xl mx-auto" />

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {[
            {
              title: t('departments.starredPersonnel'),
              personnel: featuredPersonnel,
              description: t('departments.starredPersonnelInfo'),
              icon: Star,
            },
            {
              title: 'Staff',
              personnel: staffPersonnel,
              description: t('departments.staffInfo'),
              icon: Users,
            },
            {
              title: t('departments.frontendTitle'),
              personnel: frontendPersonnel,
              description: t('departments.frontend'),
              icon: Code,
            },
            {
              title: t('departments.backendTitle'),
              personnel: backendPersonnel,
              description: t('departments.backend'),
              icon: Code,
            },
            {
              title: t('departments.fullstackTitle'),
              personnel: fullstackPersonnel,
              description: t('departments.fullstack'),
              icon: Code,
            },
            {
              title: t('departments.mobileTitle'),
              personnel: mobilePersonnel,
              description: t('departments.mobile'),
              icon: Phone,
            },
          ].map((section, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <DepartmentHeader
                icon={section.icon}
                title={section.title}
                description={section.description}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.personnel.map(person => (
                  <FadeIn key={person.id}>
                    <PersonCard person={person} color={null} />
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </section>
    </div>
  );
}
