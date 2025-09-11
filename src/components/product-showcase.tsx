"use client"

import { motion } from "framer-motion"
import { Illustration } from "@/components/ui/illustration"

// 合同会社渋のサービス紹介コンポーネント
const ProductShowcase = () => {
  const services = [
    {
      title: "ブランドデザイン",
      subtitle: "本質を見つめ、美しく表現する。",
      description: "企業やプロダクトの本質を深く理解し、日本の美意識を現代に活かしたブランドアイデンティティを構築します。ロゴから体験まで、一貫した世界観を創造します。",
      image: "/illustrations/design-process.svg",
      buttonText: "詳しく見る",
      buttonLink: "#branding",
      color: "primary"
    },
    {
      title: "ウェブデザイン",
      subtitle: "使いやすさと美しさの調和。",
      description: "ユーザビリティとエステティクスを両立したウェブサイト・アプリケーションをデザインします。シンプルな操作性の中に、深い思考と配慮を込めます。",
      image: "/illustrations/web-design.svg", 
      buttonText: "詳しく見る",
      buttonLink: "#web",
      color: "secondary"
    },
    {
      title: "デザインコンサルティング",
      subtitle: "戦略とクリエイティブの融合。",
      description: "ビジネス戦略とデザイン思考を融合させ、企業の課題解決と成長を支援します。表面的な装飾ではなく、本質的な価値を創造するデザインを提案します。",
      image: "/illustrations/team-work.svg",
      buttonText: "詳しく見る", 
      buttonLink: "#consulting",
      color: "tertiary"
    }
  ]

  return (
    <section className="py-0 bg-background">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="max-w-[1024px] mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
            <div className="text-center mb-16">
              <motion.h2
                className="mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {service.title}
              </motion.h2>
              
              <motion.h3
                className="text-2xl lg:text-3xl mb-6 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {service.subtitle}
              </motion.h3>
              
              <motion.p
                className="mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {service.description}
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a href={service.buttonLink} className="apple-button">
                  {service.buttonText}
                </a>
                <a href="/contact" className="apple-button-outline">
                  お問い合わせ
                </a>
              </motion.div>
            </div>
            
            <motion.div
              className="relative rounded-3xl overflow-hidden bg-card p-12 lg:p-16"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Illustration
                src={service.image}
                alt={service.title}
                size="4xl"
                className="mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  )
}

export default ProductShowcase
