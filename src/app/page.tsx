import HomeHeader from './components/HomeHeader/HomeHeader';
import HomepageContact from './components/HomepageContact';
import HomepageInfo from './components/HomepageInfo';
import HomepageServices from './components/HomepageServices/HomepageServices';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomepageContact />
      <HomepageInfo />
      <HomepageServices />
    </>
  );
}
