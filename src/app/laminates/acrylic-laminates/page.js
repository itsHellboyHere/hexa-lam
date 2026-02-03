import AcrylicCatalog from "./components/AcrylicCatalog";
import AcrylicHero from "./components/AcrylicHero";
import AcrylicIntro from "./components/AcrylicIntro";
import AcrylicShadesGrid from "./components/AcrylicShadesGrid";
import KeyStickyFeatures from "./components/AcyrlicKeyFeautres";
// laminates/acrlyic-laminates/page.js

export default function AcrylicPage(){
    return(
        <>
        <AcrylicHero/>
        <AcrylicIntro/>
        <KeyStickyFeatures/>
        <AcrylicShadesGrid/>
        <AcrylicCatalog/>
        </>
    )
}