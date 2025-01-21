import { useTranslations } from 'next-intl';
import React from 'react';

const HeaderHomepage = () => {
  return (
    <header className="flex flex-col items-center justify-center min-h-screen text-white font-serif px-4 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">
        Backendito.
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl mt-5">
        Your Tech Solution Partner
      </h2>
    </header>
  );
};

export default HeaderHomepage;
