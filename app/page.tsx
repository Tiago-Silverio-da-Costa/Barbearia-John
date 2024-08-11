import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Reviews from "@/components/reviews";
import ServicesLight from "@/components/servicesLight";
import AboutBrown from "@/components/aboutBrown";
import DiscountGold from "@/components/discountGold";

export default function Home() {
  return <>
    <Hero />
    <ServicesLight /> 
    <AboutBrown />
    <DiscountGold />
    <Contact />
    <Footer />
  </>
}
