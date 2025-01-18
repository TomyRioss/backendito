import Contact from "@/components/Home/Contact";
import { Hero } from "@/components/Home/Hero";
import { Info } from "@/components/Home/Info";
import { Services } from "@/components/Home/Services";


export default function Home() {
  return (
    <>
      <Hero />
      <Contact />
      <Info />
      <Services />
    </>
  );
}
