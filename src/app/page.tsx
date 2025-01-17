import HomeHeader from './components/HomeHeader/HomeHeader';
import HomepageContact from './components/HomepageContact';
import HomepageInfo from './components/HomepageInfo';
import HomepageServices from './components/HomepageServices/HomepageServices';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomepageContact />
      <HomepageInfo />
      <HomepageServices />
      <Footer />
    </>
  );
}
