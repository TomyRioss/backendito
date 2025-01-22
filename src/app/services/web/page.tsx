import React from 'react';
import Planes from './Planes';
import WorkInfo from '../pagesContent/WorkInfo';
import PaymentInfo from '../pagesContent/PaymentInfo';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const Page = () => {
   const t = useTranslations('landingPage.servicePage');
  return (
    <>
      <Link href={'/services'}>
        <FaArrowLeft className="absolute right-20 left-4 top-20 h-10 w-10 rounded-xl text-red-gray-800 hover:text-red-gray-600 transition-transform transform hover:scale-125 cursor-pointer dark:text-white" />
      </Link>
      <header className="  dark:bg-gray-900">
        <div className=" flex flex-col items-center justify-center text-black dark:bg-gray-900">
          <h1 className="text-4xl mb-5 dark:text-white mt-20">
            {t("webDevelopment.titlePage")}
          </h1>
          <h3 className="text-gray-700 text-xl text-center px-4 w-1/2 dark:text-white">
          {t("webDevelopment.descriptionPage")}
          </h3>
        </div>
      </header>
      <Planes />
      <WorkInfo />
      <PaymentInfo />
    </>
  );
};

export default Page;
