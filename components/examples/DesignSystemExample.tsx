"use client"

import { useDesignSystem } from '@/lib/hooks/useDesignSystem'
import { Truck, Globe, Clock, Shield } from 'lucide-react'

/**
 * Example component demonstrating the design system usage
 * This shows how to use the centralized colors and gradients
 */
export default function DesignSystemExample() {
  const { classes } = useDesignSystem()

  return (
    <section className={classes.components.section.container}>
      {/* Background gradient */}
      <div className={classes.components.section.background} />
      
      {/* Top border accent */}
      <div className={classes.components.section.border} />
      
      {/* Glow effect */}
      <div className={classes.components.section.glow} />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${classes.gradient.textPrimary}`}>
            Design System Example
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${classes.text.secondary}`}>
            This component demonstrates how to use the centralized design system for consistent styling across the application.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Truck,
              title: "Primary Card",
              description: "This card uses the primary design system classes",
              variant: "primary" as const
            },
            {
              icon: Globe,
              title: "Secondary Card", 
              description: "This card uses secondary styling",
              variant: "secondary" as const
            },
            {
              icon: Clock,
              title: "Accent Card",
              description: "This card uses accent colors",
              variant: "accent" as const
            },
            {
              icon: Shield,
              title: "Muted Card",
              description: "This card uses muted styling",
              variant: "muted" as const
            }
          ].map((item, index) => (
            <div key={index} className={classes.components.card.container}>
              <div className={classes.components.icon.primary}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className={classes.components.card.header}>{item.title}</h3>
              <p className={classes.components.card.content}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="text-center mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${classes.text.primary}`}>
            Button Examples
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={classes.components.button.primary}>
              Primary Button
            </button>
            <button className={classes.components.button.secondary}>
              Secondary Button
            </button>
            <button className={classes.components.button.outline}>
              Outline Button
            </button>
          </div>
        </div>

        {/* Text Examples */}
        <div className="max-w-4xl mx-auto">
          <h3 className={`text-2xl font-bold mb-8 ${classes.text.primary}`}>
            Text Examples
          </h3>
          <div className="space-y-4">
            <h1 className={`text-4xl font-bold ${classes.text.primary}`}>
              Primary Heading
            </h1>
            <h2 className={`text-2xl font-semibold ${classes.text.secondary}`}>
              Secondary Heading
            </h2>
            <p className={`text-lg ${classes.text.secondary}`}>
              This is secondary text that provides additional context and information.
            </p>
            <p className={`text-base ${classes.text.muted}`}>
              This is muted text for less important information.
            </p>
            <span className={`text-lg font-medium ${classes.text.accent}`}>
              This is accent text for highlighting important information.
            </span>
          </div>
        </div>

        {/* Background Examples */}
        <div className="mt-16 space-y-6">
          <h3 className={`text-2xl font-bold mb-8 ${classes.text.primary}`}>
            Background Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg ${classes.background.primary}`}>
              <h4 className={`font-semibold mb-2 ${classes.text.primary}`}>
                Primary Background
              </h4>
              <p className={classes.text.secondary}>
                This uses the primary background color.
              </p>
            </div>
            <div className={`p-6 rounded-lg ${classes.background.secondary}`}>
              <h4 className={`font-semibold mb-2 ${classes.text.primary}`}>
                Secondary Background
              </h4>
              <p className={classes.text.secondary}>
                This uses the secondary background color.
              </p>
            </div>
            <div className={`p-6 rounded-lg ${classes.background.muted}`}>
              <h4 className={`font-semibold mb-2 ${classes.text.primary}`}>
                Muted Background
              </h4>
              <p className={classes.text.secondary}>
                This uses the muted background color.
              </p>
            </div>
            <div className={`p-6 rounded-lg ${classes.background.accent}`}>
              <h4 className={`font-semibold mb-2 ${classes.text.primary}`}>
                Accent Background
              </h4>
              <p className={classes.text.secondary}>
                This uses the accent background color.
              </p>
            </div>
          </div>
        </div>

        {/* Border Examples */}
        <div className="mt-16 space-y-6">
          <h3 className={`text-2xl font-bold mb-8 ${classes.text.primary}`}>
            Border Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-lg border ${classes.border.primary}`}>
              <h4 className={`font-semibold mb-2 ${classes.text.primary}`}>
                Primary Border
              </h4>
              <p className={classes.text.secondary}>
                This uses the primary border color.
              </p>
            </div>
            <div className={`p-6 rounded-lg border ${classes.border.secondary}`}>
              <h4 className={`font-semibold mb-2 ${classes.text.primary}`}>
                Secondary Border
              </h4>
              <p className={classes.text.secondary}>
                This uses the secondary border color.
              </p>
            </div>
            <div className={`p-6 rounded-lg border ${classes.border.accent}`}>
              <h4 className={`font-semibold mb-2 ${classes.text.primary}`}>
                Accent Border
              </h4>
              <p className={classes.text.secondary}>
                This uses the accent border color.
              </p>
            </div>
          </div>
        </div>

        {/* Gradient Examples */}
        <div className="mt-16 space-y-6">
          <h3 className={`text-2xl font-bold mb-8 ${classes.text.primary}`}>
            Gradient Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg ${classes.gradient.primary} text-black`}>
              <h4 className="font-semibold mb-2">Primary Gradient</h4>
              <p>This uses the primary gradient background.</p>
            </div>
            <div className={`p-6 rounded-lg ${classes.gradient.backgroundLight}`}>
              <h4 className={`font-semibold mb-2 ${classes.text.primary}`}>
                Background Gradient
              </h4>
              <p className={classes.text.secondary}>
                This uses the background gradient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 