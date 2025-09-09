import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import Image from "next/image"

const illustrationVariants = cva(
  "flex-shrink-0",
  {
    variants: {
      size: {
        sm: "w-32 h-32",
        md: "w-48 h-48", 
        lg: "w-64 h-64",
        xl: "w-80 h-80",
        "2xl": "w-96 h-96",
        "3xl": "w-[28rem] h-[28rem]",
        "4xl": "w-[32rem] h-[32rem]",
        full: "w-full h-full",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface IllustrationProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof illustrationVariants> {
  src: string
  alt: string
  priority?: boolean
}

const Illustration = React.forwardRef<HTMLDivElement, IllustrationProps>(
  ({ className, size, src, alt, priority = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(illustrationVariants({ size }), className)}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-contain"
        />
      </div>
    )
  }
)
Illustration.displayName = "Illustration"

export { Illustration, illustrationVariants }
