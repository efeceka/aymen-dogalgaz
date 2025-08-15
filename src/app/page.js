import Hero from "@/components/Hero";
import IntroTextSection from "@/components/IntroTextSection";
import ServicesSection from "@/components/ServicesSection";
import WhatsappForm from "@/components/WhatsappForm";
import BilgiBolumu from "@/components/BilgiBolumu";

export default function Home() {
  return (
    <>
    <Hero/>
    <IntroTextSection/>
    <BilgiBolumu/>
    <ServicesSection/>
    <WhatsappForm/>
    </>
  );
}
