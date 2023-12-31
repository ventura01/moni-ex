import AboutUs from "@/components/AboutUs";
import CTAsection from "@/components/CTAsection";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
// import Image from "next/image";
//app/page.tsx

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Features />
      <Testimonials />
      <CTAsection />
    </main>
  );
}
