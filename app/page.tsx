import About from "@/components/about";
import Discout from "@/components/discount";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Localization from "@/components/localization";
import Services from "@/components/services";

export default function Home() {
  return <>
    <Header />
    <Hero />
    <Services />
    <Discout />
    <About />
    <Localization />
    <Footer />
  </>
}
