import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const ServicesInfo = () => {
  const t = useTranslations('landingPage.ourServices.servicesInfo');
  return (
    <div className="bg-blue-800 dark:bg-blue-950 text-white py-16 px-10 flex items-center justify-center">
      <div className="grid grid-cols-2 items-center gap-10 max-w-6xl">
        {/* Sección del gráfico */}
        <div className="flex justify-center">
          <Image src={'/chat.svg'} alt="imagen chat" width={500} height={500} />
        </div>
        {/* Sección del texto */}
        <div className="flex flex-col justify-center">
          <h2 className="text-cyan-400 text-lg uppercase font-semibold mb-3">
            {t('join')}
          </h2>
          <h3 className="text-4xl font-bold mb-6">{t('getStarted')}</h3>
          <p className="text-gray-300 text-lg mb-6">{t('contactUs')}</p>
          <Link href={'/contact'}>
            <Button className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500">
              {t('startNow')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
