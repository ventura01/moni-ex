import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Contact />
      <Testimonials />
    </main>
  )
}
