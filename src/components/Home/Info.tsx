'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';

const Info = () => {
  const t = useTranslations('landingPage.info');

  return (
    <section
      className="relative w-full py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      aria-labelledby="info-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent dark:via-cyan-500/50" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Decoration */}
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 group-hover:opacity-20 blur-xl transition-all duration-500" />

              {/* Image container */}
              <div className="relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl dark:shadow-2xl-dark">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/web.svg"
                    alt={t('profile')}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-xl shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Heading */}
            <div className="space-y-4">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300"
                id="info-heading"
              >
                {t('profile')}
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-300 dark:to-blue-300">
                {t('hands')}
              </h2>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
                {t('ourProgrammers')}
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transform hover:scale-[1.02] active:scale-[0.98] transition duration-300 shadow-lg shadow-blue-500/25 dark:shadow-blue-900/50"
            >
              {t('ourTeam')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12 w-full max-w-xl mx-auto lg:mx-0">
              {[
                { title: '24/7', desc: 'Soporte técnico' },
                { title: '99%', desc: 'Satisfacción del cliente' },
                { title: '+25', desc: 'Desarrolladores expertos' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
                >
                  <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    </section>
  );
};

export default Info;
