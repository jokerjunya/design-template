"use client"

import { SVGIcon } from "@/components/ui/icon"
import { useState } from "react"

// SVGアイコンを動的にインポート
import GithubIcon from "../../../icons/brands/github.svg"
import TwitterIcon from "../../../icons/brands/twitter.svg"
import GoogleIcon from "../../../icons/brands/google.svg"
import HomeOutlineIcon from "../../../icons/ui/outline/home.svg"
import UserOutlineIcon from "../../../icons/ui/outline/user.svg"
import SettingsOutlineIcon from "../../../icons/ui/outline/settings.svg"
import HomeSolidIcon from "../../../icons/ui/solid/home.svg"
import UserSolidIcon from "../../../icons/ui/solid/user.svg"
import SettingsSolidIcon from "../../../icons/ui/solid/settings.svg"
import WaveIcon from "../../../marks/wave.svg"
import LightningIcon from "../../../marks/lightning.svg"
import SparkleIcon from "../../../marks/sparkle.svg"

// アイコンカテゴリの定義
const iconCategories = {
  brands: [
    { name: "GitHub", component: GithubIcon },
    { name: "Twitter", component: TwitterIcon },
    { name: "Google", component: GoogleIcon },
  ],
  "ui-outline": [
    { name: "Home", component: HomeOutlineIcon },
    { name: "User", component: UserOutlineIcon },
    { name: "Settings", component: SettingsOutlineIcon },
  ],
  "ui-solid": [
    { name: "Home", component: HomeSolidIcon },
    { name: "User", component: UserSolidIcon },
    { name: "Settings", component: SettingsSolidIcon },
  ],
  marks: [
    { name: "Wave", component: WaveIcon },
    { name: "Lightning", component: LightningIcon },
    { name: "Sparkle", component: SparkleIcon },
  ],
}

const categoryTitles = {
  brands: "Brand Icons",
  "ui-outline": "UI Icons (Outline)",
  "ui-solid": "UI Icons (Solid)",
  marks: "Decoration Marks",
}

const categoryDescriptions = {
  brands: "Popular brand and service logos",
  "ui-outline": "Outline style icons for general UI use",
  "ui-solid": "Solid style icons for emphasis",
  marks: "Decorative elements and shapes",
}

export default function IconsPage() {
  const [selectedSize, setSelectedSize] = useState<"sm" | "md" | "lg" | "xl" | "2xl">("md")
  const [selectedColor, setSelectedColor] = useState<"current" | "primary" | "secondary" | "success" | "warning" | "error">("current")

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Design Assets - Icon Library
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive collection of SVG icons and decorative marks for your projects
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <label htmlFor="size" className="text-sm font-medium text-gray-700">
                Size:
              </label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as "sm" | "md" | "lg" | "xl" | "2xl")}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <label htmlFor="color" className="text-sm font-medium text-gray-700">
                Color:
              </label>
              <select
                id="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value as "current" | "primary" | "secondary" | "success" | "warning" | "error")}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="current">Current</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {Object.entries(iconCategories).map(([categoryKey, icons]) => (
            <div key={categoryKey} className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {categoryTitles[categoryKey as keyof typeof categoryTitles]}
                </h2>
                <p className="text-gray-600">
                  {categoryDescriptions[categoryKey as keyof typeof categoryDescriptions]}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {icons.map((icon) => (
                  <div
                    key={icon.name}
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                      <SVGIcon
                        component={icon.component}
                        size={selectedSize}
                        color={selectedColor}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">
                      {icon.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage Example</h2>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`import { SVGIcon } from "@/components/ui/icon"
import GithubIcon from "../../icons/brands/github.svg"

function MyComponent() {
  return (
    <SVGIcon 
      component={GithubIcon} 
      size="lg" 
      color="primary" 
    />
  )
}`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Installation</h3>
          <p className="text-blue-800 mb-3">
            Clone this repository into your project and import the icons you need:
          </p>
          <div className="bg-blue-900 rounded p-3">
            <code className="text-blue-100 text-sm">
              git clone https://github.com/jokerjunya/design-assets.git
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}
