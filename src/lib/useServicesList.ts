import { useTranslations } from 'next-intl';

type ServicesItemsType = {
  title: string;
  description: string;
  image: string;
};

export const useServicesList = (): ServicesItemsType[] => {
  const t = useTranslations('landingPage.ourServices.services');
  return [
    {
      title: t('web.title'),
      description: t('web.description'),
      image: '/web.svg',
    },
    {
      title: t('mobile.title'),
      description: t('mobile.description'),
      image: '/mobile.svg',
    },
    {
      title: t('design.title'),
      description: t('design.description'),
      image: '/design.svg',
    },
    {
      title: t('data.title'),
      description: t('data.description'),
      image: '/data.svg',
    },
    {
      title: t('script.title'),
      description: t('script.description'),
      image: '/wand.svg',
    },
    {
      title: t('seo.title'),
      description: t('seo.description'),
      image: '/seo.svg',
    },
  ];
};
