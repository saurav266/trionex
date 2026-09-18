import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyTrionex from "@/components/WhyTrionex";
import DigitalSystem from "@/components/DigitalSystem";
import SelectedWork from "@/components/SelectedWork";
 import Technology from "@/components/Technology";
 import Process from "@/components/Process";
 import ClientExperience from "@/components/ClientExperience";
import FAQ from "@/components/FAQ";
 import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <Hero />
      <Stats />
      <WhyTrionex />
      <DigitalSystem />
      <Services />
       <SelectedWork />
       <Technology />
       <Process /> 
      {<ClientExperience />}
      <FAQ />

      <FinalCTA /> 
    </main>
  );
}