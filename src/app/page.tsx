import Contact from '@/components/Home/Contact';
import Info from '@/components/Home/Info';
import Services from '@/components/Home/Services';
import HeaderHomepage from '@/components/Home/HeaderHomepage';

export default function Home() {
  return (
    <>
      <HeaderHomepage />
      <Contact />
      <Info />
      <Services />
    </>
  );
}
