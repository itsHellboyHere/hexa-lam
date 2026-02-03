import AcrylicShowcase from "./components/AcrylicShowcase";
import KeyStickyFeatures from "./components/KeyStickyFeatures";
import LaminatesCTA from "./components/LaminatesCTA";
import LaminatesHero from "./components/LaminatesHero";
import PageIntro from "./components/PageIntro";


export default function LaminatesPage() {
  return (
    <>
      <LaminatesHero />
      <PageIntro />
      <AcrylicShowcase />
      <KeyStickyFeatures />
      <LaminatesCTA />
    
    </>
  );
}