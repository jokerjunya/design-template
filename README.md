# 合同会社渋 公式サイト

**日本の美意識を現代に表現するデザイン会社**

合同会社渋の公式ウェブサイト。日本の美意識「渋さ」を現代に表現するデザイン会社として、ミニマリズムと機能美を追求したデザインサービスを提供しています。Apple.comのデザインシステムを基盤に、日本らしい美しさを表現しています。

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **⚡ Next.js 15** - Latest React framework with App Router and Server Components
- **🎨 Beautiful Illustrations** - unDraw-style SVG illustrations for modern visual appeal
- **📦 79+ Icon Library** - Comprehensive collection across 9 categories with SVGR integration
- **🧩 shadcn/ui** - Beautiful, accessible, and customizable components
- **✨ Framer Motion** - Production-ready motion library with smooth animations
- **🔧 TypeScript** - Full type safety and enhanced developer experience
- **📱 Responsive Design** - Mobile-first approach with modern layouts
- **🎯 SEO Optimized** - Built-in SEO best practices
- **⚙️ ESLint** - Code quality and consistency
- **🚀 Performance** - Optimized for Core Web Vitals

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Illustrations:** unDraw-style SVG graphics
- **Icons:** 79+ professional icons with SVGR
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Font:** Geist (Sans & Mono)
- **Package Manager:** npm

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/jokerjunya/design-template.git
cd design-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your application.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
design-template/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
└── README.md
```

## 🎨 Customization

### Colors & Theme

The project uses Tailwind CSS v4 with custom CSS variables. Modify colors in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.21 0.034 264.665);
  --secondary: oklch(0.967 0.003 264.542);
  /* Add your custom colors */
}
```

### Components

All components are built with:
- **Responsive design** principles
- **Accessibility** standards
- **Smooth animations** with Framer Motion
- **Modern styling** with Tailwind CSS

### Adding New Components

1. Create your component in `src/components/`
2. Use shadcn/ui primitives for consistency
3. Add Framer Motion animations for smooth interactions
4. Follow TypeScript best practices

## 🧩 Available shadcn/ui Components

The template includes these pre-installed components:

- `Button` - Interactive buttons with multiple variants
- `Card` - Content containers with headers and descriptions
- `Navigation Menu` - Accessible navigation components
- `Separator` - Visual dividers and separators

Add more components as needed:

```bash
npx shadcn@latest add [component-name]
```

## 🎨 合同会社渋のデザイン哲学

日本の美意識「渋さ」を現代のウェブデザインに表現：

- **控えめな美しさ** - 目立ちすぎず、しかし印象に残る洗練されたデザイン
- **機能美** - 美しさと使いやすさを両立したユーザーエクスペリエンス
- **ミニマリズム** - 無駄を削ぎ落とした本質的なデザイン
- **精密な技術** - Apple.comレベルの技術的完成度
- **日本らしさ** - 伝統的な美意識を現代的に解釈したブランディング
- **持続可能性** - 長く愛されるデザインの追求

## 🏢 会社概要

**合同会社渋** は東京・渋谷を拠点とするデザイン会社です。

### サービス内容
- **ブランドデザイン** - ロゴ、アイデンティティ、ブランド戦略
- **ウェブデザイン** - ウェブサイト、アプリケーション、UI/UX
- **デザインコンサルティング** - 戦略立案、デザイン監修、ワークショップ

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

## ⚡ Performance

- **Core Web Vitals** optimized
- **Image optimization** with Next.js Image component
- **Code splitting** with dynamic imports
- **Font optimization** with next/font
- **Bundle size** monitoring

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
```

Deploy to Vercel with one click or connect your GitHub repository.

### Other Platforms

The app can be deployed to any Node.js hosting platform:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📦 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Framer Motion](https://www.framer.com/motion/) - Motion library for React
- [Geist Font](https://vercel.com/font) - Typography by Vercel

---

**Made with ❤️ for the developer community**

Ready to build something amazing? Clone this repository and start creating your next project!