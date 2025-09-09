"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SVGIcon } from "@/components/ui/icon"
import { Illustration } from "@/components/ui/illustration"

// アイコンをインポート
import GithubIcon from "../../icons/brands/github.svg"

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Launch
                <br />
                <span className="text-blue-600">Your Next Project?</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Everything is set up and optimized. Clone this repository and start building 
                your next amazing web application with professional-grade tools and assets.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <SVGIcon component={GithubIcon} size="md" />
                  Clone Repository
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300"
                >
                  View Documentation
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Illustration
              src="/illustrations/launch.svg"
              alt="Launch Your Project Illustration"
              size="3xl"
              className="mx-auto"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex justify-center space-x-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>MIT License</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Free to Use</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Active Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA