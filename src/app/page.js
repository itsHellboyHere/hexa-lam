import ApplicationsSticky from "./components/Applications/ApplicationSticky";
import PrimaryCTA from "./components/CTA/PrimaryCta";
import Hero from "./components/Hero/Hero";
import HowItsMade from "./components/HowItsMade";
import ProductHighlight from "./components/ProductHighlight";
import StatsStrip from "./components/StatsStrip/StatsStrip";
import WhyHexaLam from "./components/WhyHexaLam";

export default function HomePage(){
  return(
    // <main>HexaLam</main>
    <>
    <Hero/>
<div style={{ 
        position: 'relative', 
        zIndex: 2, 
        background: 'var(--bg-main)', /* Ensure this has a solid background to cover the hero */
        // marginTop: '0' 
      }}>
    <WhyHexaLam/>
    <StatsStrip/>
    <ProductHighlight/>
    <ApplicationsSticky/>
    <HowItsMade/>
    <PrimaryCTA/>
  </div>
    </>
  )
}