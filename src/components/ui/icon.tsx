import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const iconVariants = cva(
  "flex-shrink-0",
  {
    variants: {
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4", 
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-8 h-8",
        "2xl": "w-10 h-10",
        "3xl": "w-12 h-12",
        "4xl": "w-16 h-16",
      },
      color: {
        current: "text-current",
        primary: "text-blue-600",
        secondary: "text-gray-500",
        success: "text-green-600",
        warning: "text-yellow-600", 
        error: "text-red-600",
        muted: "text-gray-400",
      },
    },
    defaultVariants: {
      size: "md",
      color: "current",
    },
  }
)

export interface IconProps 
  extends Omit<React.SVGProps<SVGSVGElement>, "color">, 
    VariantProps<typeof iconVariants> {
  children?: React.ReactNode
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size, color, children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn(iconVariants({ size, color }), className)}
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        {children}
      </svg>
    )
  }
)
Icon.displayName = "Icon"

// SVGアイコンコンポーネント用のラッパー
interface SVGIconProps extends Omit<IconProps, "children"> {
  component: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const SVGIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ component: Component, className, size, color, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(iconVariants({ size, color }), className)}
        {...props}
      />
    )
  }
)
SVGIcon.displayName = "SVGIcon"

export { Icon, SVGIcon, iconVariants }
