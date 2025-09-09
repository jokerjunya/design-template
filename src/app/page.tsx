import Navbar from "@/components/navbar"
import Hero from "@/components/hero" 
import Features from "@/components/features"
import IconShowcase from "@/components/icon-showcase"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <IconShowcase />
      <CTA />
      <Footer />
    </main>
  )
}