"use client"

import { useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { name: "Store", href: "/store" },
    { name: "Mac", href: "/mac" },
    { name: "iPad", href: "/ipad" },
    { name: "iPhone", href: "/iphone" },
    { name: "Watch", href: "/watch" },
    { name: "Vision", href: "/vision" },
    { name: "AirPods", href: "/airpods" },
    { name: "TV & Home", href: "/tv-home" },
    { name: "Entertainment", href: "/entertainment" },
    { name: "Accessories", href: "/accessories" },
    { name: "Support", href: "/support" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="max-w-[1024px] mx-auto">
        <div className="flex items-center justify-between h-11">
          {/* Apple Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-foreground p-2 hover:text-muted-foreground transition-colors">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor">
                <path d="M8.02 0C7.27.02 5.84.28 4.9 1.38c-.85 1.01-1.18 2.39-.98 3.74 1.3.07 2.68-.68 3.52-1.69C8.28 2.42 8.53 1.04 8.02 0zM13.65 5.5c-1.53-1.96-3.87-3.12-6.33-3.12C5.46 2.38 3.86 3.1 2.95 3.1c-.9 0-2.26-.68-3.71-.68C-1.64 2.42-2.42 3.6-1.92 5.64c.5 2.04 1.9 5.16 3.44 6.84 1.07 1.17 2.06 1.57 2.96 1.57.9 0 1.3-.6 2.75-.6s1.85.6 2.75.6c.9 0 1.89-.4 2.96-1.57 1.54-1.68 2.94-4.8 3.44-6.84C16.87 3.6 16.09 2.42 13.65 5.5z"/>
              </svg>
            </Link>
          </div>

          {/* Navigation Items - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[12px] text-muted-foreground hover:text-foreground transition-colors font-normal"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search and Bag Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors p-1">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
                <path d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-.691 3.516a4.5 4.5 0 1 1 1.258-1.258l2.908 2.908a.89.89 0 0 1-1.258 1.258L9.31 10.016z"/>
              </svg>
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors p-1">
              <svg width="14" height="17" viewBox="0 0 14 17" fill="currentColor">
                <path d="M12.25 4.75H11.5V3.5C11.5 1.56 9.94 0 8 0S4.5 1.56 4.5 3.5V4.75H3.75C2.78 4.75 2 5.53 2 6.5V14.5C2 15.47 2.78 16.25 3.75 16.25H12.25C13.22 16.25 14 15.47 14 14.5V6.5C14 5.53 13.22 4.75 12.25 4.75ZM6 3.5C6 2.39 6.89 1.5 8 1.5S10 2.39 10 3.5V4.75H6V3.5Z"/>
              </svg>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                {!isMenuOpen ? (
                  <path d="M1 4h16v1H1V4zm0 4.5h16v1H1v-1zM1 13h16v1H1v-1z"/>
                ) : (
                  <path d="M9 8.293l4.146-4.147.708.708L9.707 9l4.147 4.146-.708.708L9 9.707l-4.146 4.147-.708-.708L8.293 9 4.146 4.854l.708-.708L9 8.293z"/>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="max-w-[1024px] mx-auto py-4 px-6">
            <div className="grid grid-cols-1 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[17px] text-foreground hover:text-muted-foreground transition-colors py-2 border-b border-border/30 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
