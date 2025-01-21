import { useTranslations } from 'next-intl';
import React from 'react';

const HeaderHomepage = () => {
  const t = useTranslations("landingPage.head")
  return (
    <>
      <header className="flex flex-col items-center justify-center h-screen text-white font-serif ">
        <h1 className="text-6xl">Backendito.</h1>
        <h2 className="text-4xl mt-10">{t("slogan")}</h2>
      </header>
    </>
  );
};

export default HeaderHomepage;
