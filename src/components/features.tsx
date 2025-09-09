"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Features = () => {
  const features = [
    {
      title: "Next.js 15",
      description: "The latest React framework with App Router, Server Components, and optimized performance.",
      icon: "⚡",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development with modern design patterns.",
      icon: "🎨",
    },
    {
      title: "shadcn/ui",
      description: "Beautiful, accessible, and customizable components built on Radix UI primitives.",
      icon: "🧩",
    },
    {
      title: "Framer Motion",
      description: "Production-ready motion library for React with powerful animation capabilities.",
      icon: "✨",
    },
    {
      title: "TypeScript",
      description: "Full TypeScript support for type-safe development and better code quality.",
      icon: "🔧",
    },
    {
      title: "Responsive Design",
      description: "Mobile-first responsive design that works beautifully on all screen sizes.",
      icon: "📱",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete starter template with modern tools and best practices 
            to help you build exceptional web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Production Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Fully Responsive</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
