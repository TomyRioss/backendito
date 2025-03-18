'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Handshake, BrainCircuit, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const FloatingBackground = () => {
  return (
    <>
      {/* Partículas flotantes dinámicas */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-600/20 rounded-full pointer-events-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [0, window.innerHeight + 100],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            scale: 0.5 + Math.random(),
          }}
        />
      ))}

      {/* Formas geométricas holográficas */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`hologram-${i}`}
          className="absolute pointer-events-none"
          style={{
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            background: `radial-gradient(circle,
              rgba(99, 102, 241, 0.1) 0%,
              rgba(168, 85, 247, 0.05) 50%,
              transparent 100%)`,
            filter: 'blur(40px)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Efecto de grid interactivo */}
      <div className="absolute inset-0 opacity-10 dark:opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[size:50px_50px] bg-gradient-to-r from-gray-400/20 via-transparent to-gray-400/20 dark:from-gray-600/20 dark:to-gray-600/20 mask-image-[radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      </div>
    </>
  );
};

const HeaderHomepage = () => {
  const t = useTranslations('landingPage.head');

  const features = [
    { icon: <Code className="w-5 h-5" />, text: t('keywords.code') },
    { icon: <BrainCircuit className="w-5 h-5" />, text: t('keywords.desing') },
    { icon: <Handshake className="w-5 h-5" />, text: t('keywords.seo') },
  ];

  const stats = [
    { value: '4000+', label: t('stats.projects') },
    { value: '99%', label: t('stats.clients') },
    { value: '24/7', label: t('stats.support') },
  ];

  // Animaciones
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerVariants = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <header className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden isolate">
      {/* Fondo avanzado */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <FloatingBackground />

        {/* Gradiente dinámico */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-gray-800/50 dark:via-gray-900/40 dark:to-gray-950/50"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="max-w-4xl py-20 lg:py-32 relative z-10">
          {/* Badge animado */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 ring-1 ring-blue-600/10 dark:ring-blue-400/20 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            ✨ {t('launch')}
          </motion.div>

          {/* Título y descripción */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 space-y-6"
          >
            <motion.h1
              variants={titleVariants}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tighter"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Backendito
              </span>
              <motion.span
                className="text-blue-600 dark:text-blue-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                .
              </motion.span>
            </motion.h1>

            <motion.p
              variants={titleVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
            >
              {t('description')}
            </motion.p>
          </motion.div>

          {/* Features con hover 3D */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover={{
                  y: -5,
                  rotateZ: Math.random() * 4 - 2,
                  scale: 1.05,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                <motion.span
                  className="text-blue-600 dark:text-blue-400"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {feature.icon}
                </motion.span>
                <span className="text-base font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Botones con efecto neón */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link href={'/services'}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center text-base font-semibold">
                  {t('cta')}
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:rotate-45" />
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>

            <Link href={'/contact'}>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 text-black hover:bg-gray-50/50  rounded-xl text-base font-semibold shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
              >
                {t('secondaryCta')}
              </Button>
            </Link>
          </motion.div>

          {/* Stats con efecto aparición */}
          <motion.div
            ref={statsRef}
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            variants={staggerVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200/50 dark:border-gray-800/50"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                className="space-y-2 text-center"
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400"
                  animate={{ scale: [0.9, 1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Efectos de iluminación dinámica */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.1), transparent 40%)',
            'radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.1), transparent 40%)',
            'radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.1), transparent 40%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Animaciones globales */}
      <style jsx global>{`
        @keyframes hologram-pulse {
          0% {
            opacity: 0.2;
            filter: blur(20px);
          }
          50% {
            opacity: 0.5;
            filter: blur(30px);
          }
          100% {
            opacity: 0.2;
            filter: blur(20px);
          }
        }

        @keyframes particle-drift {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default HeaderHomepage;
