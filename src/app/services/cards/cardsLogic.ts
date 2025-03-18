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
      price: '500 ',
      timeout: '2 ' + t('weeks'),
    },
  ];
};

export default cardsLogic;
