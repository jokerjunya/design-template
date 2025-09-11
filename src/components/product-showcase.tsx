"use client"

import { motion } from "framer-motion"
import { Illustration } from "@/components/ui/illustration"

// Apple.com style product showcase component
const ProductShowcase = () => {
  const products = [
    {
      title: "iPhone 16 Pro",
      subtitle: "Titanium. So strong. So light. So Pro.",
      description: "Built with Grade 5 titanium and powered by A18 Pro chip for incredible performance.",
      image: "/illustrations/mobile-app.svg",
      buttonText: "Learn more",
      buttonLink: "#",
      color: "natural"
    },
    {
      title: "MacBook Pro",
      subtitle: "Mind-blowing. Head-turning.",
      description: "Supercharged by M3 Pro and M3 Max chips for unprecedented power and battery life.",
      image: "/illustrations/coding.svg", 
      buttonText: "Learn more",
      buttonLink: "#",
      color: "space-black"
    },
    {
      title: "Apple Vision Pro",
      subtitle: "Welcome to the era of spatial computing.",
      description: "An infinite canvas for apps that scale beyond the boundaries of a traditional display.",
      image: "/illustrations/design-process.svg",
      buttonText: "Learn more", 
      buttonLink: "#",
      color: "silver"
    }
  ]

  return (
    <section className="py-0 bg-background">
      {products.map((product, index) => (
        <motion.div
          key={product.title}
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="max-w-[1024px] mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
            <div className="text-center mb-16">
              <motion.h2
                className="mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {product.title}
              </motion.h2>
              
              <motion.h3
                className="text-2xl lg:text-3xl mb-6 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {product.subtitle}
              </motion.h3>
              
              <motion.p
                className="mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {product.description}
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a href={product.buttonLink} className="apple-button">
                  {product.buttonText}
                </a>
                <a href={product.buttonLink} className="apple-button-outline">
                  Buy
                </a>
              </motion.div>
            </div>
            
            <motion.div
              className="relative rounded-3xl overflow-hidden bg-card p-12 lg:p-16"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Illustration
                src={product.image}
                alt={product.title}
                size="4xl"
                className="mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default ProductShowcase
