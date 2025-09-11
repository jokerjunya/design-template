"use client"

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background pt-16 flex items-center justify-center">
      <div className="max-w-[1024px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 合同会社渋 hero typography */}
          <motion.h1
            className="text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            渋
          </motion.h1>
          
          <motion.h2
            className="text-2xl lg:text-3xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            美しさは、控えめに宿る。
          </motion.h2>
          
          <motion.p
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            日本の美意識「渋さ」を現代に表現する合同会社渋。
            ミニマルで機能的なデザインを通じて、本質的な美しさを追求し、
            クライアントの価値を静かに、しかし確実に引き出します。
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#services" className="apple-button">
              サービスを見る
            </a>
            <a href="#contact" className="apple-button-outline">
              お問い合わせ
            </a>
          </motion.div>
          
          {/* 設立年 */}
          <motion.p
            className="text-[17px] text-muted-foreground mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            設立 2024年
          </motion.p>
        </motion.div>
        
        {/* Large product image area - placeholder for now */}
        <motion.div
          className="mt-16 lg:mt-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.6 }}
        >
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] bg-gradient-to-br from-card to-muted/50 rounded-3xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                <div className="text-4xl font-bold text-primary">渋</div>
              </div>
              <p className="text-muted-foreground font-light">
                Simple. Functional. Beautiful.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
