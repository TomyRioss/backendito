type ServiceCardType = {
  id: number;
  path: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  timeout: string;
};

const cardsLogic = (t: (key: string) => string): ServiceCardType[] => {
  return [
    {
      id: 0,
      path: '/services/web',
      title: t('servicesInfo.web.title'),
      description: t('servicesInfo.web.description'),
      icon: '/web.png',
      price: '65.00',
      timeout: '4 ' + t('days'),
    },
    {
      id: 1,
      path: '/services/data',
      title: t('servicesInfo.data.title'),
      description: t('servicesInfo.data.description'),
      icon: '/data.png',
      price: '150.00',
      timeout: '1 ' + t('weeks'),
    },
    {
      id: 2,
      path: '/services/desktop',
      title: t('servicesInfo.desktop.title'),
      description: t('servicesInfo.desktop.description'),
      icon: '/desktop.png',
      price: '375.00',
      timeout: '2 ' + t('weeks'),
    },
    {
      id: 3,
      path: '/services/mobile',
      title: t('servicesInfo.mobile.title'),
      description: t('servicesInfo.mobile.description'),
      icon: '/mobile.png',
      price: '150.00',
      timeout: '2 ' + t('weeks'),
    },
    {
      id: 4,
      path: '/services/script',
      title: t('servicesInfo.script.title'),
      description: t('servicesInfo.script.description'),
      icon: '/script.png',
      price: '85.00',
      timeout: '1 ' + t('weeks'),
    },
    {
      id: 5,
      path: '/services/seo',
      title: t('servicesInfo.seo.title'),
      description: t('servicesInfo.seo.description'),
      icon: '/seo.png',
      price: '25.00',
      timeout: '1 ' + t('weeks'),
    },
  ];
};

export default cardsLogic;
