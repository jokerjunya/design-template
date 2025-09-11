import Navbar from "@/components/navbar"
import Hero from "@/components/hero" 
import ProductShowcase from "@/components/product-showcase"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Footer />
    </main>
  )
}