import AcrylicShowcase from "./components/AcrylicShowcase";
import KeyStickyFeatures from "./components/KeyStickyFeatures";
import LaminatesCTA from "./components/LaminatesCTA";
import LaminatesHero from "./components/LaminatesHero";
import PageIntro from "./components/PageIntro";
export const metadata = {
  title: "Laminates Collection",
  description:
    "Explore Hexa Lam's complete collection laminate surfaces.",
};

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