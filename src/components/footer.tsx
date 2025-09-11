"use client"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "サービス",
      links: ["ブランドデザイン", "ウェブデザイン", "デザインコンサルティング", "ロゴ制作", "パッケージデザイン"]
    },
    {
      title: "実績",
      links: ["ブランディング事例", "ウェブサイト事例", "コンサルティング事例", "受賞歴"]
    },
    {
      title: "会社情報",
      links: ["会社概要", "代表挨拶", "沿革", "アクセス"]
    },
    {
      title: "採用情報",
      links: ["採用について", "デザイナー募集", "インターン募集", "働く環境"]
    },
    {
      title: "お問い合わせ",
      links: ["プロジェクトのご相談", "お見積もり", "メディア掲載について", "講演・セミナー"]
    }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-[1024px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h3 className="font-semibold text-[14px] text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-xl text-foreground mb-4">合同会社渋</h4>
              <p className="text-[14px] text-muted-foreground mb-4 leading-relaxed">
                〒150-0001 東京都渋谷区神宮前6-23-4<br />
                桑野ビル2階<br />
                TEL: 03-1234-5678<br />
                Email: hello@shibu.design
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[14px] text-foreground mb-4">お問い合わせ</h4>
              <p className="text-[14px] text-muted-foreground mb-4 leading-relaxed">
                プロジェクトのご相談はお気軽にお問い合わせください。<br />
                初回相談は無料で承っております。
              </p>
              <a href="/contact" className="apple-button text-[14px] px-6 py-2">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-muted-foreground">
            <div className="mb-4 md:mb-0">
              Copyright © {currentYear} 合同会社渋. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:underline">プライバシーポリシー</a>
              <span>|</span>
              <a href="#" className="hover:underline">利用規約</a>
              <span>|</span>
              <a href="#" className="hover:underline">特定商取引法</a>
              <span>|</span>
              <a href="#" className="hover:underline">サイトマップ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
