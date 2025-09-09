"use client"

import { motion } from "framer-motion"
import { SVGIcon } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// アイコンをインポート
import GithubIcon from "../../icons/brands/github.svg"
import TwitterIcon from "../../icons/brands/twitter.svg"
import GoogleIcon from "../../icons/brands/google.svg"
import HomeOutlineIcon from "../../icons/ui/outline/home.svg"
import UserOutlineIcon from "../../icons/ui/outline/user.svg"
import SettingsOutlineIcon from "../../icons/ui/outline/settings.svg"
import HomeSolidIcon from "../../icons/ui/solid/home.svg"
import UserSolidIcon from "../../icons/ui/solid/user.svg"
import SettingsSolidIcon from "../../icons/ui/solid/settings.svg"
import WaveIcon from "../../marks/wave.svg"
import LightningIcon from "../../marks/lightning.svg"
import SparkleIcon from "../../marks/sparkle.svg"

const IconShowcase = () => {
  const iconCategories = [
    {
      title: "Brand Icons",
      description: "Popular brand and service logos",
      icons: [
        { component: GithubIcon, name: "GitHub" },
        { component: TwitterIcon, name: "Twitter" },
        { component: GoogleIcon, name: "Google" },
      ],
      color: "current" as const,
    },
    {
      title: "UI Outline",
      description: "Clean outline icons for interfaces",
      icons: [
        { component: HomeOutlineIcon, name: "Home" },
        { component: UserOutlineIcon, name: "User" },
        { component: SettingsOutlineIcon, name: "Settings" },
      ],
      color: "primary" as const,
    },
    {
      title: "UI Solid",
      description: "Solid style icons for emphasis",
      icons: [
        { component: HomeSolidIcon, name: "Home" },
        { component: UserSolidIcon, name: "User" },
        { component: SettingsSolidIcon, name: "Settings" },
      ],
      color: "secondary" as const,
    },
    {
      title: "Decorative Marks",
      description: "Artistic elements for visual enhancement",
      icons: [
        { component: WaveIcon, name: "Wave" },
        { component: LightningIcon, name: "Lightning" },
        { component: SparkleIcon, name: "Sparkle" },
      ],
      color: "warning" as const,
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
            Beautiful, scalable SVG icons ready to use in your projects. 
            All icons are optimized and integrated with SVGR for seamless React usage.
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
              
              <div className="grid grid-cols-3 gap-6">
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

              <div className="mt-6 text-center">
                <code className="inline-block px-3 py-1 bg-gray-100 rounded text-sm text-gray-600 font-mono">
                  icons/{category.title.toLowerCase().replace(' ', '/')}/
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
import GithubIcon from "../../icons/brands/github.svg"

<SVGIcon 
  component={GithubIcon} 
  size="lg" 
  color="primary" 
/>`}</code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IconShowcase
