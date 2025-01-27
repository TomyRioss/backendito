'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  DollarSign,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import cardsLogic from './cardsLogic';
import Link from 'next/link';

const Cards = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent dark:via-indigo-500/50" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-white dark:via-blue-200 dark:to-indigo-200"
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-blue-200/80 max-w-2xl mx-auto"
          >
            Soluciones diseñadas para transformar tu visión en realidad
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-10">
          {cardsLogic.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Ambient card background */}
              <div className="absolute -inset-px rounded-2xl transition-all duration-500 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-100 blur-md pointer-events-none" />

              <div className="relative flex flex-col lg:flex-row rounded-2xl overflow-hidden z-10">
                {/* Image section */}
                <div className="lg:w-2/5 relative">
                  <div className="absolute inset-0 mix-blend-overlay z-10 bg-gradient-to-br from-indigo-400/20 to-purple-600/30 dark:from-indigo-600/20 dark:to-purple-900/40" />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-white via-transparent lg:from-transparent lg:via-transparent dark:from-slate-950" />

                  <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden">
                    <Image
                      src={card.icon}
                      alt={`${card.title}`}
                      fill
                      className="object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority={index < 2}
                    />
                  </div>
                </div>

                {/* Content section */}
                <div className="relative flex-1 p-8 lg:p-10 bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl transition-colors duration-500 z-20">
                  <div className="relative z-10">
                    {/* Card header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-slate-800 dark:text-white">
                          {card.title}
                        </h2>
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300">
                          <Sparkles className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            Servicio Premium
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          scale: hoveredCard === card.id ? 1.1 : 1,
                        }}
                        className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full text-white bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500 transition-colors duration-300"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Card description */}
                    <p className="text-lg leading-relaxed mb-8 text-slate-600 dark:text-blue-100/80">
                      {card.description}
                    </p>

                    {/* Card features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center gap-4 text-slate-700 dark:text-blue-200/90">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 border border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20 transition-colors duration-300">
                          <DollarSign className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500 dark:text-blue-200/60">
                            Desde
                          </p>
                          <p className="text-lg font-semibold">{card.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-slate-700 dark:text-blue-200/90">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 border border-purple-200 dark:bg-purple-500/10 dark:border-purple-500/20 transition-colors duration-300">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500 dark:text-blue-200/60">
                            Plazo estimado
                          </p>
                          <p className="text-lg font-semibold">
                            {card.timeout}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={card.path}
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 shadow-lg shadow-indigo-200/50 dark:shadow-indigo-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition duration-300 z-30"
                      >
                        <h2>Explorar servicio</h2>
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/10 transform hover:scale-[1.02] active:scale-[0.98] transition duration-300 z-30"
                      >
                        Solicitar presupuesto
                      </Link>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-gradient-to-br from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 opacity-15 dark:opacity-20 blur-2xl transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-gradient-to-tr from-pink-300 to-purple-300 dark:from-pink-500 dark:to-purple-500 opacity-15 dark:opacity-20 blur-2xl transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] transition-colors duration-500 pointer-events-none" />
    </section>
  );
};

export default Cards;
