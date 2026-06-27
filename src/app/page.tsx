import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Areas />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
