import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

const ServicesInfo = () => {
  const t = useTranslations('landingPage.ourServices.servicesInfo');

  return (
    <section
      className="relative  w-full bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 text-white py-16 md:py-24 px-4 overflow-hidden"
      aria-labelledby="services-info-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-cyan-400/10 to-transparent rounded-lg" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cyan-400/10 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12" />
              <div className="relative transform transition-transform hover:scale-105 duration-300">
                <Image
                  src="/chat.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-cyan-400 text-sm md:text-base uppercase font-bold tracking-wider">
                {t('join')}
              </span>
              <h2
                id="services-info-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100"
              >
                {t('getStarted')}
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-200 dark:text-gray-300 leading-relaxed max-w-2xl">
              {t('contactUs')}
            </p>

            <div className="flex justify-center lg:justify-start pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-black px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                <span>{t('startNow')}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
