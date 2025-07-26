import { useMemo } from 'react'
import { theme, getGradientClasses, getColorClasses, getSemanticColors } from '@/lib/design-system'
import type { UseDesignSystemReturn } from '@/lib/types/design-system'

/**
 * Hook for accessing design system tokens and utilities
 */
export function useDesignSystem(): UseDesignSystemReturn {
  const semanticColors = useMemo(() => getSemanticColors(), [])
  
  return {
    // Design tokens
    colors: theme.colors,
    gradients: theme.gradients,
    tokens: theme.tokens,
    
    // Utility functions
    getGradientClasses,
    getColorClasses,
    getSemanticColors: () => semanticColors,
    
    // Predefined class combinations
    classes: {
      // Text classes
      text: {
        primary: semanticColors['text-primary'],
        secondary: semanticColors['text-secondary'],
        muted: semanticColors['text-muted'],
        accent: semanticColors['text-accent'],
      },
      
      // Background classes
      background: {
        primary: semanticColors['bg-primary'],
        secondary: semanticColors['bg-secondary'],
        muted: semanticColors['bg-muted'],
        accent: semanticColors['bg-accent'],
      },
      
      // Border classes
      border: {
        primary: semanticColors['border-primary'],
        secondary: semanticColors['border-secondary'],
        accent: semanticColors['border-accent'],
      },
      
      // Gradient classes
      gradient: {
        primary: getGradientClasses('primary'),
        primaryHover: getGradientClasses('primary', 'hover'),
        textPrimary: getGradientClasses('text', 'primary'),
        textAccent: getGradientClasses('text', 'accent'),
        backgroundLight: getGradientClasses('background', 'light'),
        backgroundDark: getGradientClasses('background', 'dark'),
        borderAccent: getGradientClasses('border', 'accent'),
        buttonPrimary: getGradientClasses('button', 'primary'),
        buttonSecondary: getGradientClasses('button', 'secondary'),
        iconPrimary: getGradientClasses('icon', 'primary'),
        iconSecondary: getGradientClasses('icon', 'secondary'),
      },
      
      // Component-specific classes
      components: {
        // Card styles
        card: {
          container: 'bg-white dark:bg-zinc-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700/50',
          header: 'text-xl font-bold text-zinc-900 dark:text-white mb-3',
          content: 'text-zinc-600 dark:text-zinc-300',
        },
        
        // Button styles
        button: {
          primary: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 rounded-full relative overflow-hidden group',
          secondary: 'bg-white/5 hover:bg-yellow-400/10 border-white/30 text-yellow-400 group-hover:text-yellow-300',
          outline: 'border border-white/30 text-white hover:bg-white/10',
        },
        
        // Icon styles
        icon: {
          primary: 'w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center',
          secondary: 'w-10 h-10 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center',
          small: 'w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center',
        },
        
        // Section styles
        section: {
          container: 'relative py-16 md:py-24',
          background: 'absolute inset-0 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black -z-10',
          border: 'absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent',
          glow: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/5 blur-3xl -z-10',
        },
        
        // Navigation styles
        nav: {
          container: 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg shadow-md',
          link: 'text-zinc-800 hover:text-yellow-600 dark:text-zinc-200 dark:hover:text-yellow-400',
          linkActive: 'text-yellow-600 dark:text-yellow-400',
        },
        
        // Hero styles
        hero: {
          overlay: 'absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30 z-10',
          title: 'text-5xl md:text-7xl font-bold text-white mb-6 leading-tight',
          titleAccent: 'bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent',
          subtitle: 'text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto',
        },
      },
    },
  }
}

export default useDesignSystem 