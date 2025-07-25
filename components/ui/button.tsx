import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// Animated Button variants
const animatedButtonVariants = {
  primary: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full relative overflow-hidden group",
  outline: "border-white/30 text-white hover:bg-white/10 rounded-full relative overflow-hidden group",
  default: "relative overflow-hidden group rounded-full",
}

interface AnimatedButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "outline" | "default"
  href?: string
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
}

function AnimatedButton({
  className,
  variant = "default",
  size = "lg",
  href,
  children,
  ...props
}: AnimatedButtonProps) {
  const buttonContent = (
    <>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/0 via-black/10 to-black/0 group-hover:animate-shimmer" />
      <span className={cn(
        "absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full",
        variant === "primary" ? "bg-gradient-to-r from-yellow-600 to-yellow-800" : "bg-gradient-to-r from-white/5 to-white/20"
      )} />
      <span className="relative z-10 flex items-center transition-all duration-300">
        {children}
      </span>
      <span className={cn(
        "absolute -inset-1 rounded-full opacity-0 blur-md group-hover:animate-pulse transition-all duration-500",
        variant === "primary" ? "group-hover:opacity-20 bg-white" : "group-hover:opacity-10 bg-yellow-400"
      )}></span>
    </>
  )

  // If href is provided, wrap with Link
  if (href) {
    return (
      <Button
        className={cn(
          animatedButtonVariants[variant],
          "py-6 text-lg",
          className
        )}
        size={size}
        asChild
        {...props}
      >
        <Link href={href}>
          {buttonContent}
        </Link>
      </Button>
    )
  }

  // Otherwise, render as regular button
  return (
    <Button
      className={cn(
        animatedButtonVariants[variant],
        "py-6 text-lg",
        className
      )}
      size={size}
      {...props}
    >
      {buttonContent}
    </Button>
  )
}

export { Button, AnimatedButton, buttonVariants }
