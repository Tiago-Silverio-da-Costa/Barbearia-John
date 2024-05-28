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
    <div className="bg-gradient-to-t from-blackColor from-60% to-[#363536] to-90% ">
      <About />
      <Services />
      <Reviews />
      <Contact />
    </div>
    <Footer />
  </>
}
