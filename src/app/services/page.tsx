import Cards from '@/app/services/cards/Cards';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('landingPage.services');
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full text-white bg-from-blue-900 via-gray-200 to-gray-100 dark:bg-gradient-to-b dark:from-blue-900 dark:via-gray-800 dark:to-gray-900 ">
        <div className="mt-10">
          <h2 className="text-4xl font-bold mt-10 text-blue-400 dark:text-blue-800">
            {t('header')}
          </h2>
          <p className="mt-4 text-gray-400 dark:text-gray-400 text-base">
            {t('description')}
          </p>
        </div>
      </div>
      <Separator className="dark:bg-blue-950" />

      <Cards />
    </>
  );
}
