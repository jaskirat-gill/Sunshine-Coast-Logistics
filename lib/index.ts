/**
 * Main exports for the design system
 */

// Design system core
export { default as theme, colors, gradients, tokens } from './design-system'
export { getGradientClasses, getColorClasses, getSemanticColors } from './design-system'

// React hook
export { default as useDesignSystem } from './hooks/useDesignSystem'

// TypeScript types
export type {
  ColorPalette,
  GradientPalette,
  DesignTokens,
  Theme,
  UseDesignSystemReturn,
  ColorShade,
  PrimaryColors,
  NeutralColors,
  SemanticColors,
  BackgroundColors,
  TextColors,
  GradientDirection,
  PrimaryGradients,
  BackgroundGradients,
  TextGradients,
  BorderGradients,
  ButtonGradients,
  IconGradients,
  DecorativeGradients,
  SpacingTokens,
  BorderRadiusTokens,
  ShadowTokens,
  TransitionTokens,
  ZIndexTokens,
  GradientType,
  ColorType,
  ColorName,
  GradientClassesFunction,
  ColorClassesFunction,
  SemanticColorsFunction,
  TextClasses,
  BackgroundClasses,
  BorderClasses,
  GradientClasses,
  ComponentClasses,
  DesignSystemClasses
} from './types/design-system'

// Utility functions
export { cn } from './utils' 