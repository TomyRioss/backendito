import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

const Contact = () => {
  const t = useTranslations('landingPage.contact');

  return (
    <article className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-900 dark:from-blue-900 dark:to-blue-950 w-full py-16 px-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main content container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm font-medium">
                {t('theSolutionToYourProject')}
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t('neverLeaveAProblemUnsolved')}
              </h2>

              <p className="text-lg text-blue-100/90 dark:text-blue-100/80 max-w-xl mx-auto lg:mx-0">
                {t('ourTeamPlansTheSolution')}
              </p>
            </div>

            {/* Contact information */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-blue-100/90">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-300" />
                <span>contacto@backendito.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/services" className="group">
                <button className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl text-blue-900 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                  <span>{t('contactUs')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" />
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/teamworkers.svg"
                alt="Team collaboration illustration"
                width={500}
                height={500}
                className="w-full h-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
