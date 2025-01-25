import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Info = () => {
  const t = useTranslations('landingPage.info');
  return (
    <article className="w-full py-10 px-4 md:px-6 dark:bg-slate-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div className="flex justify-center items-center order-2 lg:order-1">
          <div className="w-64 h-64 md:w-96 md:h-96  rounded-lg flex items-center justify-center">
            <Image src={'/web.svg'} alt="web" width={500} height={500} />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
          <h2 className="text-xl lg:text-2xl text-cyan-700 dark:text-cyan-300 mb-3">
            {t('profile')}
          </h2>
          <h2 className="text-3xl lg:text-5xl mb-3 text-black dark:text-white">
            {t('hands')}
          </h2>
          <p className="text-base lg:text-xl text-black dark:text-white">
            {t('ourProgrammers')}
          </p>
          <Link href={'/about'}>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-400 hover:bg-blue-500 w-40 lg:w-48 py-3 lg:py-6 rounded-xl mt-6 text-base lg:text-lg">
                {t('ourTeam')}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Info;
