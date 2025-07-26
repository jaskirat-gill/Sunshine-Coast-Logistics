import type { ColorPalette, GradientPalette, DesignTokens, Theme } from './types/design-system'

/**
 * Design System - Centralized Colors and Gradients
 * 
 * This file contains all the design tokens, colors, and gradients used throughout
 * the Sunshine Coast Logistics application. All components should reference these
 * tokens instead of hardcoding colors.
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================

export const colors: ColorPalette = {
  // Primary Brand Colors
  primary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  
  // Neutral Colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Semantic Colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  
  // Background Colors
  background: {
    light: '#ffffff',
    dark: '#0a0a0a',
    lightSecondary: '#fafafa',
    darkSecondary: '#171717',
  },
  
  // Text Colors
  text: {
    primary: {
      light: '#171717',
      dark: '#fafafa',
    },
    secondary: {
      light: '#525252',
      dark: '#a3a3a3',
    },
    muted: {
      light: '#737373',
      dark: '#737373',
    },
  },
} as const

// ============================================================================
// GRADIENTS
// ============================================================================

export const gradients: GradientPalette = {
  // Primary Gradients
  primary: {
    // Main brand gradient
    main: 'linear-gradient(to right, #facc15, #ca8a04)',
    // Hover state
    hover: 'linear-gradient(to right, #eab308, #a16207)',
    // Light variant
    light: 'linear-gradient(to right, #fef08a, #fde047)',
    // Dark variant
    dark: 'linear-gradient(to right, #ca8a04, #713f12)',
  },
  
  // Background Gradients
  background: {
    // Hero section overlay
    heroOverlay: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.4), rgba(0,0,0,0.3))',
    // Section backgrounds
    light: 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
    dark: 'linear-gradient(to bottom, #171717, #0a0a0a)',
    // Card backgrounds
    cardLight: 'linear-gradient(to bottom, #ffffff, #fafafa)',
    cardDark: 'linear-gradient(to bottom, #262626, #171717)',
  },
  
  // Text Gradients
  text: {
    // Primary text gradient
    primary: 'linear-gradient(to right, #171717, #525252)',
    // Dark mode primary text
    primaryDark: 'linear-gradient(to right, #fafafa, #facc15)',
    // Accent text
    accent: 'linear-gradient(to right, #facc15, #ca8a04)',
  },
  
  // Border Gradients
  border: {
    // Subtle border accent
    accent: 'linear-gradient(to right, transparent, rgba(250, 204, 21, 0.3), transparent)',
    // Card borders
    card: 'linear-gradient(to right, #e5e5e5, #d4d4d4)',
    cardDark: 'linear-gradient(to right, #404040, #525252)',
  },
  
  // Button Gradients
  button: {
    // Primary button
    primary: 'linear-gradient(to right, #facc15, #ca8a04)',
    primaryHover: 'linear-gradient(to right, #eab308, #a16207)',
    // Secondary button
    secondary: 'linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.2))',
    secondaryHover: 'linear-gradient(to right, rgba(250,204,21,0.1), rgba(250,204,21,0.2))',
  },
  
  // Icon Gradients
  icon: {
    // Primary icon background
    primary: 'linear-gradient(to bottom right, #facc15, #ca8a04)',
    // Secondary icon background
    secondary: 'linear-gradient(to bottom right, #fef08a, #fde047)',
  },
  
  // Decorative Gradients
  decorative: {
    // Glow effects
    glow: 'radial-gradient(circle, rgba(250, 204, 21, 0.05) 0%, transparent 70%)',
    // Shimmer effects
    shimmer: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
  },
} as const

// ============================================================================
// DESIGN TOKENS
// ============================================================================

export const tokens: DesignTokens = {
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  // Border Radius
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
  
  // Z-Index
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
} as const

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get color value with opacity
 */
export function getColorWithOpacity(color: string, opacity: number): string {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`
}

/**
 * Get gradient class names for Tailwind
 */
export function getGradientClasses(gradientType: keyof typeof gradients, variant?: string): string {
  const gradient = gradients[gradientType]
  const variantKey = variant ?? 'main'
  
  switch (gradientType) {
    case 'primary':
      return variantKey === 'main' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
             variantKey === 'hover' ? 'bg-gradient-to-r from-yellow-500 to-yellow-700' :
             variantKey === 'light' ? 'bg-gradient-to-r from-yellow-200 to-yellow-300' :
             'bg-gradient-to-r from-yellow-600 to-yellow-800'
    
    case 'text':
      return variantKey === 'primary' ? 'bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent' :
             variantKey === 'accent' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent' :
             'bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent'
    
    case 'background':
      return variantKey === 'light' ? 'bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-black' :
             variantKey === 'dark' ? 'bg-gradient-to-b from-zinc-900 to-black' :
             'bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black'
    
    case 'border':
      return variantKey === 'accent' ? 'bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent' :
             variantKey === 'card' ? 'border border-zinc-200 dark:border-zinc-700/50' :
             'border border-zinc-200 dark:border-zinc-700'
    
    case 'button':
      return variantKey === 'primary' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700' :
             variantKey === 'secondary' ? 'bg-white/5 hover:bg-yellow-400/10 border-white/30' :
             'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
    
    case 'icon':
      return variantKey === 'primary' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
             variantKey === 'secondary' ? 'bg-gradient-to-br from-yellow-200 to-yellow-300' :
             'bg-gradient-to-br from-yellow-400 to-yellow-600'
    
    default:
      return ''
  }
}

/**
 * Get color classes for common use cases
 */
export function getColorClasses(type: 'text' | 'bg' | 'border', color: string, variant?: string): string {
  const colorMap = {
    primary: 'yellow',
    neutral: 'zinc',
    success: 'green',
    warning: 'amber',
    error: 'red',
  } as const
  
  const baseColor = colorMap[color as keyof typeof colorMap] ?? color
  const variantSuffix = variant ? `-${variant}` : ''
  
  return `${type}-${baseColor}${variantSuffix}`
}

/**
 * Get semantic color classes
 */
export function getSemanticColors(): Record<string, string> {
  return {
    // Text colors
    'text-primary': 'text-zinc-900 dark:text-white',
    'text-secondary': 'text-zinc-600 dark:text-zinc-300',
    'text-muted': 'text-zinc-500 dark:text-zinc-400',
    'text-accent': 'text-yellow-500 dark:text-yellow-400',
    
    // Background colors
    'bg-primary': 'bg-white dark:bg-zinc-900',
    'bg-secondary': 'bg-zinc-50 dark:bg-zinc-800',
    'bg-muted': 'bg-zinc-100 dark:bg-zinc-800/50',
    'bg-accent': 'bg-yellow-50 dark:bg-yellow-900/20',
    
    // Border colors
    'border-primary': 'border-zinc-200 dark:border-zinc-700',
    'border-secondary': 'border-zinc-300 dark:border-zinc-600',
    'border-accent': 'border-yellow-200 dark:border-yellow-700',
  }
}

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

export const theme: Theme = {
  colors,
  gradients,
  tokens,
  getGradientClasses,
  getColorClasses,
  getSemanticColors,
} as const

export default theme 