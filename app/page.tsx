import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Reviews from "@/components/reviews";

export default function Home() {
  return <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Reviews />
    <Contact />
    <Footer />
  </>
}
