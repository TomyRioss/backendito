import { useTranslations } from 'next-intl';

type ServicesItemsType = {
  path: string;
  title: string;
  description: string;
  image: string;
};

export const useServicesList = (): ServicesItemsType[] => {
  const t = useTranslations('landingPage.ourServices.services');
  return [
    {
      path: '/services/web',
      title: t('web.title'),
      description: t('web.description'),
      image: '/web.svg',
    },
    {
      path: '/services/mobile',
      title: t('mobile.title'),
      description: t('mobile.description'),
      image: '/mobile.svg',
    },
    {
      path: '/services/desktop',
      title: t('desktop.title'),
      description: t('desktop.description'),
      image: '/desktop.svg',
    },
    {
      path: '/services/data',
      title: t('data.title'),
      description: t('data.description'),
      image: '/data.svg',
    },
    {
      path: '/services/script',
      title: t('script.title'),
      description: t('script.description'),
      image: '/wand.svg',
    },
    {
      path: '/services/seo',
      title: t('seo.title'),
      description: t('seo.description'),
      image: '/seo.svg',
    },
  ];
};
