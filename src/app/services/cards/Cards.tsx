'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Sparkles, ChevronRight } from 'lucide-react';
import cardsLogic from './cardsLogic';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Cards = () => {
  const t = useTranslations('landingPage.services');
  const cards = cardsLogic(t);

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500"
      aria-label={t('headerTitle')}
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent dark:via-indigo-500/50" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <header className="text-center mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-white dark:via-blue-200 dark:to-indigo-200"
          >
            {t('headerTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-blue-200/80 max-w-2xl mx-auto"
          >
            {t('headerDescription')}
          </motion.p>
        </header>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
              }}
              className="group relative flex flex-col h-full"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Card wrapper */}
              <div className="relative flex-1 rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:border-transparent dark:hover:border-transparent">
                {/* Ambient card background */}
                <div className="absolute -inset-px rounded-2xl transition-all duration-500 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 opacity-0 group-hover:opacity-100 blur-md" />

                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 mix-blend-overlay z-10 bg-gradient-to-br from-indigo-400/20 to-purple-600/30 dark:from-indigo-600/20 dark:to-purple-900/40" />
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                    priority={index < 3}
                    itemProp="image"
                  />
                </div>

                {/* Content section */}
                <div className="relative p-6 flex flex-col flex-1">
                  {/* Card header */}
                  <header className="mb-4">
                    <h2
                      className="text-xl font-bold text-slate-800 dark:text-white mb-2"
                      itemProp="name"
                    >
                      {card.title}
                    </h2>
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {t('premium')}
                      </span>
                    </div>
                  </header>

                  {/* Card description */}
                  <p
                    className="text-base text-slate-600 dark:text-blue-100/80 mb-6"
                    itemProp="description"
                  >
                    {card.description}
                  </p>

                  {/* Card features */}
                  <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-500/10">
                        <DollarSign className="w-4 h-4 text-slate-700 dark:text-blue-200/90" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-blue-200/60">
                          {t('from')}
                        </p>
                        <p
                          className="font-semibold text-slate-700 dark:text-blue-200/90"
                          itemProp="price"
                        >
                          AR$ {card.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-500/10">
                        <Clock className="w-4 h-4 text-slate-700 dark:text-blue-200/90" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-blue-200/60">
                          {t('timeout')}
                        </p>
                        <p className="font-semibold text-slate-700 dark:text-blue-200/90">
                          {card.timeout}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card actions */}
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link
                      href={card.path}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 hover:scale-[1.02] active:scale-[0.98] transition duration-300"
                      itemProp="url"
                    >
                      {t('explore')}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white hover:scale-[1.02] active:scale-[0.98] transition duration-300"
                    >
                      {t('request')}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    </section>
  );
};

export default Cards;
