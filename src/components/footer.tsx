"use client"

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { SVGIcon } from "@/components/ui/icon"

// アイコンをインポート
import GithubIcon from "../../icons/brands/github.svg"
import TwitterIcon from "../../icons/brands/twitter.svg"
import SparkleIcon from "../../marks/sparkle.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ["Features", "Pricing", "Documentation", "Support"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Community", "Help Center", "API Reference", "Changelog"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  }

  const socialLinks = [
    { name: "GitHub", url: "#", icon: GithubIcon },
    { name: "Twitter", url: "#", icon: TwitterIcon },
    { name: "Discord", url: "#", icon: SparkleIcon },
    { name: "LinkedIn", url: "#", icon: SparkleIcon },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <SVGIcon component={SparkleIcon} size="xl" color="warning" />
                <h3 className="text-2xl font-bold">DesignStarter</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A modern starter template with beautiful icons for building exceptional web applications. 
                Includes Next.js, Tailwind CSS, shadcn/ui, SVGR, and more cutting-edge tools.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                    title={social.name}
                  >
                    <SVGIcon 
                      component={social.icon} 
                      size="lg" 
                      className="text-gray-300 hover:text-white transition-colors"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-800" />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-4 md:mb-0">
            © {currentYear} DesignStarter. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center text-xs text-gray-500 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Made with 
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <SVGIcon component={SparkleIcon} size="xs" color="error" />
          </motion.div>
          using Next.js, Tailwind CSS, shadcn/ui, SVGR & Framer Motion
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
