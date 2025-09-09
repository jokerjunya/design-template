"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SVGIcon } from "@/components/ui/icon"

// アイコンをインポート
import GithubIcon from "../../icons/brands/github.svg"
import HomeIcon from "../../icons/ui/solid/home.svg"
import UserIcon from "../../icons/ui/solid/user.svg"
import SettingsIcon from "../../icons/ui/solid/settings.svg"
import DiamondIcon from "../../marks/shapes/diamond.svg"
import LightningIcon from "../../marks/lightning.svg"

const Features = () => {
  const features = [
    {
      title: "Next.js 15",
      description: "The latest React framework with App Router, Server Components, and optimized performance.",
      icon: LightningIcon,
      color: "warning" as const,
    },
    {
      title: "SVG Icon Library",
      description: "Complete collection of brand icons, UI elements, and decorative marks with SVGR integration.",
      icon: DiamondIcon,
      color: "primary" as const,
    },
    {
      title: "shadcn/ui",
      description: "Beautiful, accessible, and customizable components built on Radix UI primitives.",
      icon: HomeIcon,
      color: "secondary" as const,
    },
    {
      title: "Framer Motion",
      description: "Production-ready motion library for React with powerful animation capabilities.",
      icon: SettingsIcon,
      color: "success" as const,
    },
    {
      title: "TypeScript",
      description: "Full TypeScript support for type-safe development and better code quality.",
      icon: UserIcon,
      color: "error" as const,
    },
    {
      title: "Brand Integration",
      description: "Ready-to-use brand icons including GitHub, Twitter, Google and more social platforms.",
      icon: GithubIcon,
      color: "current" as const,
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
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-gray-300 group">
                <CardHeader>
                  <motion.div 
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                      <SVGIcon 
                        component={feature.icon} 
                        size="2xl" 
                        color={feature.color}
                      />
                    </div>
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-gray-900 text-center">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-center">
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
