"use client"

import { motion } from "framer-motion"
import { SVGIcon } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// サンプルアイコン - 各カテゴリから代表的なアイコンをピックアップ
import GithubIcon from "../../icons/brands/github.svg"
import AppleIcon from "../../icons/brands/apple.svg"
import HomeSolidIcon from "../../icons/ui/solid/home.svg"
import StarRoundedIcon from "../../icons/ui/rounded/star.svg"
import MenuIcon from "../../icons/categories/navigation/menu.svg"
import ShoppingCartIcon from "../../icons/categories/commerce/shopping-cart.svg"
import SmartphoneIcon from "../../icons/categories/device-tech/smartphone.svg"
import MusicIcon from "../../icons/categories/media-entertainment/music.svg"
import SparkleIcon from "../../marks/sparkle.svg"
import LightningIcon from "../../marks/lightning.svg"

const IconShowcase = () => {
  const iconCategories = [
    {
      title: "Brand Icons",
      description: "12 popular brand and service logos",
      icons: [
        { component: GithubIcon, name: "GitHub" },
        { component: AppleIcon, name: "Apple" },
      ],
      color: "current" as const,
      path: "icons/brands/",
    },
    {
      title: "UI Multiple Styles",
      description: "Outline, solid & rounded styles",
      icons: [
        { component: HomeSolidIcon, name: "Home (Solid)" },
        { component: StarRoundedIcon, name: "Star (Rounded)" },
      ],
      color: "primary" as const,
      path: "icons/ui/*/",
    },
    {
      title: "Navigation",
      description: "9 essential navigation elements",
      icons: [
        { component: MenuIcon, name: "Menu" },
      ],
      color: "secondary" as const,
      path: "icons/categories/navigation/",
    },
    {
      title: "Commerce",
      description: "8 e-commerce and shopping icons",
      icons: [
        { component: ShoppingCartIcon, name: "Shopping Cart" },
      ],
      color: "warning" as const,
      path: "icons/categories/commerce/",
    },
    {
      title: "Device & Tech",
      description: "15 technology and device icons",
      icons: [
        { component: SmartphoneIcon, name: "Smartphone" },
      ],
      color: "success" as const,
      path: "icons/categories/device-tech/",
    },
    {
      title: "Media & Entertainment",
      description: "12 music, video & entertainment icons",
      icons: [
        { component: MusicIcon, name: "Music" },
      ],
      color: "muted" as const,
      path: "icons/categories/media-entertainment/",
    },
    {
      title: "Decorative Marks",
      description: "8 artistic elements and patterns",
      icons: [
        { component: SparkleIcon, name: "Sparkle" },
        { component: LightningIcon, name: "Lightning" },
      ],
      color: "error" as const,
      path: "marks/",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Icon Library Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <strong>74+ beautiful SVG icons</strong> across 9 categories, all optimized and ready to use. 
            From brands to tech devices, media entertainment to decorative marks.
          </p>
          <Link href="/icons">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              View All Icons →
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {iconCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
              
              <div className="flex justify-center gap-8 mb-6">
                {category.icons.map((icon, iconIndex) => (
                  <motion.div
                    key={icon.name}
                    className="flex flex-col items-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + iconIndex * 0.05
                    }}
                  >
                    <motion.div
                      className="mb-3"
                      whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <SVGIcon
                        component={icon.component}
                        size="3xl"
                        color={category.color}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </motion.div>
                    <span className="text-sm font-medium text-gray-700 text-center">
                      {icon.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <code className="inline-block px-3 py-1 bg-gray-100 rounded text-sm text-gray-600 font-mono">
                  {category.path}
                </code>
              </div>
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
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Easy to Use
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm text-left">
                <code>{`import { SVGIcon } from "@/components/ui/icon"
import SmartphoneIcon from "../../icons/categories/device-tech/smartphone.svg"

<SVGIcon 
  component={SmartphoneIcon} 
  size="lg" 
  color="primary" 
/>`}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            🚀 Phase 2 Complete - 74+ Icons Available!
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-2">📱 Device & Tech</h4>
              <p className="text-sm text-gray-600">15 icons including smartphones, laptops, cloud, servers, and more</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-2">🎵 Media & Entertainment</h4>
              <p className="text-sm text-gray-600">12 icons for music, video, gaming, and entertainment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IconShowcase
