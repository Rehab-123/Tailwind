import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import photoBottom from "../assets/photo2.svg";

export default function SectionOne() {
  return (
    <div className="bg-MidnightGreen pt-18.25 relative h-175">
      <Header/>
      <HeroSection/>
      <img src={photoBottom} className="w-89.5 absolute bottom-0 right-41.25"/>
    </div>
  )
}