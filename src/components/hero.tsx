"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Illustration } from "@/components/ui/illustration"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.div
                className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                🚀 Modern Web Development
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Build Amazing
                <br />
                <span className="text-blue-600">Web Applications</span>
              </h1>
              
              <motion.p
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Complete starter template with 79+ professional icons, beautiful components, 
                and modern tools. Start building your next project in minutes.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300"
              >
                View Icons →
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                79+ Icons
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                9 Categories
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Ready to Use
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Illustration
              src="/illustrations/web-design.svg"
              alt="Web Design Process Illustration"
              size="4xl"
              priority
              className="mx-auto"
            />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 -left-5 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">💎</span>
            </motion.div>
            
            <motion.div
              className="absolute bottom-20 -right-5 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-lg">⚡</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
