import { useTranslations } from 'next-intl';

type NavbarListType = {
  name: string;
  path: string;
};

export const useMenusList = (): NavbarListType[] => {
  const t = useTranslations('landingPage.navbar');
  return [
    {
      name: t('home'),
      path: '/',
    },
    {
      name: t('services'),
      path: '/services',
    },
    {
      name: t('aboutUs'),
      path: '/about',
    },

    {
      name: t('contact'),
      path: '/contact',
    },
  ];
};
