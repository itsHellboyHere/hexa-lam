import AcrylicCatalog from "./components/AcrylicCatalog";
import AcrylicHero from "./components/AcrylicHero";
import AcrylicIntro from "./components/AcrylicIntro";
import AcrylicShadesGrid from "./components/AcrylicShadesGrid";
import KeyStickyFeatures from "./components/AcyrlicKeyFeautres";
// laminates/acrlyic-laminates/page.js

export const metadata = {
  title: "Acrylic Laminates Collection",
  description:
    "Explore Hexa Lam's complete collection of acrylic laminate surfaces.",
};
export default function AcrylicPage(){
    return(
        <>
        <AcrylicHero/>

        <AcrylicIntro/>
        <AcrylicShadesGrid/>
        <KeyStickyFeatures/>
        
        <AcrylicCatalog/>
        </>
    )
}