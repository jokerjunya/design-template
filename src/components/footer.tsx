"use client"

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ["Features", "Pricing", "Documentation", "Support"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Community", "Help Center", "API Reference", "Changelog"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  }

  const socialLinks = [
    { name: "GitHub", url: "#", icon: "📚" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "Discord", url: "#", icon: "💬" },
    { name: "LinkedIn", url: "#", icon: "💼" },
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
              <h3 className="text-2xl font-bold mb-4">DesignStarter</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A modern starter template for building exceptional web applications 
                with Next.js, Tailwind CSS, and cutting-edge tools.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="text-2xl hover:text-gray-300 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    title={social.name}
                  >
                    {social.icon}
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
          className="mt-8 text-center text-xs text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Made with ❤️ using Next.js, Tailwind CSS, shadcn/ui & Framer Motion
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
