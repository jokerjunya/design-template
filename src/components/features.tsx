"use client"

import { motion } from "framer-motion"
import { Illustration } from "@/components/ui/illustration"

const Features = () => {
  const features = [
    {
      title: "Complete Development Kit",
      description: "Everything you need to start building: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.",
      illustration: "/illustrations/coding.svg",
      color: "blue",
    },
    {
      title: "Professional Icon Library", 
      description: "79+ carefully crafted SVG icons across 9 categories. From brands to tech devices, all optimized and ready to use.",
      illustration: "/illustrations/mobile-app.svg",
      color: "purple",
    },
    {
      title: "Team-Ready Workflow",
      description: "Built-in best practices, automated optimization, and collaborative tools for seamless team development.",
      illustration: "/illustrations/team-work.svg", 
      color: "green",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional-grade starter template with beautiful illustrations, 
            comprehensive icon library, and cutting-edge development tools.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {feature.color === 'blue' ? '⚡ Development' :
                   feature.color === 'purple' ? '🎨 Design Assets' :
                   '👥 Collaboration'}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500">Production Ready</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-500">Open Source</span>
                </div>
              </div>

              {/* Illustration */}
              <motion.div
                className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 rounded-2xl ${
                  feature.color === 'blue' ? 'bg-blue-100' :
                  feature.color === 'purple' ? 'bg-purple-100' :
                  'bg-green-100'
                } opacity-20`}></div>
                
                <Illustration
                  src={feature.illustration}
                  alt={`${feature.title} illustration`}
                  size="3xl"
                  className="relative z-10 mx-auto p-8"
                />
              </motion.div>
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
