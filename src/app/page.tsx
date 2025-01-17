import { Contact } from "@/components/Home/Contact";
import { Hero } from "@/components/Home/Hero";
import { Info } from "@/components/Home/Info";
import { Services } from "@/components/Home/Services";
import { Footer } from "@/components/Layout/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <Contact />
      <Info />
      <Services />
      <Footer />
    </>
  );
}
