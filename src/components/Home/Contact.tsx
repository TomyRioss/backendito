import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Contact = () => {
  const t = useTranslations('landingPage.contact');
  return (
    <article className="bg-blue-900 h-2/3 w-full grid grid-cols-2 gap-10">
      <div className="flex flex-col justify-center ml-20">
        <h2 className="text-2xl text-cyan-300 mb-3">
          {t('theSolutionToYourProject')}
        </h2>
        <h2 className="text-5xl mb-3 text-white">
          {t('neverLeaveAProblemUnsolved')}
        </h2>
        <p className="text-xl text-white">{t('ourTeamPlansTheSolution')}</p>
        <Button className="bg-cyan-300 text-black w-48 p-6 rounded-xl mt-10">
          <h2 className="text-lg">{t('contactUs')}</h2>
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <Image src={'/contact.svg'} alt="contact" width={500} height={500} />
      </div>
    </article>
  );
};

export default Contact;
