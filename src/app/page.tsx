import Contact from "@/components/Home/Contact";
import { Info } from '@/components/Home/Info';
import { Services } from '@/components/Home/Services';
import HeaderHomepage from '@/components/Home/HeaderHomepage';
import styles from '@/styles/HomeHeader.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <HeaderHomepage />
      </div>
      <Contact />
      <Info />
      <Services />
    </>
  );
}
