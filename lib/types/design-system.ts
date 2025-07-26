/**
 * TypeScript types for the design system
 */

// ============================================================================
// COLOR TYPES
// ============================================================================

export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type PrimaryColors = {
  [K in ColorShade]: string
}

export type NeutralColors = {
  [K in ColorShade]: string
}

export type SemanticColors = {
  success: { [K in ColorShade]: string }
  warning: { [K in ColorShade]: string }
  error: { [K in ColorShade]: string }
}

export type BackgroundColors = {
  light: string
  dark: string
  lightSecondary: string
  darkSecondary: string
}

export type TextColors = {
  primary: {
    light: string
    dark: string
  }
  secondary: {
    light: string
    dark: string
  }
  muted: {
    light: string
    dark: string
  }
}

export type ColorPalette = {
  primary: PrimaryColors
  neutral: NeutralColors
  success: { [K in ColorShade]: string }
  warning: { [K in ColorShade]: string }
  error: { [K in ColorShade]: string }
  background: BackgroundColors
  text: TextColors
}

// ============================================================================
// GRADIENT TYPES
// ============================================================================

export type GradientDirection = 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl'

export type PrimaryGradients = {
  main: string
  hover: string
  light: string
  dark: string
}

export type BackgroundGradients = {
  heroOverlay: string
  light: string
  dark: string
  cardLight: string
  cardDark: string
}

export type TextGradients = {
  primary: string
  primaryDark: string
  accent: string
}

export type BorderGradients = {
  accent: string
  card: string
  cardDark: string
}

export type ButtonGradients = {
  primary: string
  primaryHover: string
  secondary: string
  secondaryHover: string
}

export type IconGradients = {
  primary: string
  secondary: string
}

export type DecorativeGradients = {
  glow: string
  shimmer: string
}

export type GradientPalette = {
  primary: PrimaryGradients
  background: BackgroundGradients
  text: TextGradients
  border: BorderGradients
  button: ButtonGradients
  icon: IconGradients
  decorative: DecorativeGradients
}

// ============================================================================
// TOKEN TYPES
// ============================================================================

export type SpacingTokens = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
}

export type BorderRadiusTokens = {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  full: string
}

export type ShadowTokens = {
  sm: string
  md: string
  lg: string
  xl: string
}

export type TransitionTokens = {
  fast: string
  normal: string
  slow: string
}

export type ZIndexTokens = {
  base: number
  dropdown: number
  sticky: number
  fixed: number
  modal: number
  popover: number
  tooltip: number
}

export type DesignTokens = {
  spacing: SpacingTokens
  borderRadius: BorderRadiusTokens
  shadows: ShadowTokens
  transitions: TransitionTokens
  zIndex: ZIndexTokens
}

// ============================================================================
// UTILITY FUNCTION TYPES
// ============================================================================

export type GradientType = keyof GradientPalette
export type ColorType = 'text' | 'bg' | 'border'
export type ColorName = 'primary' | 'neutral' | 'success' | 'warning' | 'error'

export type GradientClassesFunction = (
  gradientType: GradientType,
  variant?: string
) => string

export type ColorClassesFunction = (
  type: ColorType,
  color: ColorName,
  variant?: string
) => string

export type SemanticColorsFunction = () => Record<string, string>

// ============================================================================
// COMPONENT CLASS TYPES
// ============================================================================

export type TextClasses = {
  primary: string
  secondary: string
  muted: string
  accent: string
}

export type BackgroundClasses = {
  primary: string
  secondary: string
  muted: string
  accent: string
}

export type BorderClasses = {
  primary: string
  secondary: string
  accent: string
}

export type GradientClasses = {
  primary: string
  primaryHover: string
  textPrimary: string
  textAccent: string
  backgroundLight: string
  backgroundDark: string
  borderAccent: string
  buttonPrimary: string
  buttonSecondary: string
  iconPrimary: string
  iconSecondary: string
}

export type ComponentClasses = {
  card: {
    container: string
    header: string
    content: string
  }
  button: {
    primary: string
    secondary: string
    outline: string
  }
  icon: {
    primary: string
    secondary: string
    small: string
  }
  section: {
    container: string
    background: string
    border: string
    glow: string
  }
  nav: {
    container: string
    link: string
    linkActive: string
  }
  hero: {
    overlay: string
    title: string
    titleAccent: string
    subtitle: string
  }
}

export type DesignSystemClasses = {
  text: TextClasses
  background: BackgroundClasses
  border: BorderClasses
  gradient: GradientClasses
  components: ComponentClasses
}

// ============================================================================
// HOOK RETURN TYPE
// ============================================================================

export type UseDesignSystemReturn = {
  colors: ColorPalette
  gradients: GradientPalette
  tokens: DesignTokens
  getGradientClasses: GradientClassesFunction
  getColorClasses: ColorClassesFunction
  getSemanticColors: SemanticColorsFunction
  classes: DesignSystemClasses
}

// ============================================================================
// THEME TYPE
// ============================================================================

export type Theme = {
  colors: ColorPalette
  gradients: GradientPalette
  tokens: DesignTokens
  getGradientClasses: GradientClassesFunction
  getColorClasses: ColorClassesFunction
  getSemanticColors: SemanticColorsFunction
} 