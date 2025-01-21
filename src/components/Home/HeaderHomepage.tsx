import { useTranslations } from 'next-intl';
import React from 'react';

const HeaderHomepage = () => {
  const t = useTranslations('landingPage.head');
  return (
    <>
      <header className="flex flex-col items-center justify-center h-screen text-white font-serif ">
        <h1 className="text-8xl font-bold">Backendito.</h1>
        <h2 className="text-4xl mt-5">{t('slogan')}</h2>
      </header>
    </>
  );
};

export default HeaderHomepage;
