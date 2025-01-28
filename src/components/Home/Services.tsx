import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesInfo from './ServicesInfo';
import { useServicesList } from '@/lib/useServicesList';
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('landingPage.ourServices');

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-blue-800 to-blue-900 dark:from-blue-950 dark:to-blue-900 py-16 md:py-24 px-4"
      aria-labelledby="services-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <h2
          id="services-heading"
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight"
        >
          {t('ourServices')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {useServicesList().map(service => (
            <Link
              href={service.path}
              key={service.title}
              className="group focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl"
            >
              <article className="h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center group-hover:translate-y-[-4px]">
                <div className="relative w-24 h-24 mb-6">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 96px, 96px"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  {t('learnMore')}
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <ServicesInfo />
        </div>
      </div>
    </section>
  );
};

export default Services;
