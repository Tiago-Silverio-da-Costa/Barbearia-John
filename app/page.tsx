import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Contact from "@/components/home/contact";
import Services from "@/components/home/services";
import Reviews from "@/components/home/reviews";
import ServicesLight from "@/components/home/servicesLight";
import AboutBrown from "@/components/home/aboutBrown";
import DiscountGold from "@/components/home/discountGold";

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
