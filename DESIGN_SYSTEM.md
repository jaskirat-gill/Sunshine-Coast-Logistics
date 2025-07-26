# Design System Documentation

## Overview

The Sunshine Coast Logistics design system provides a centralized approach to colors, gradients, and design tokens. This ensures consistency across the application and makes it easier to maintain and update the visual design.

## File Structure

```
lib/
├── design-system.ts          # Main design system configuration
├── hooks/
│   └── useDesignSystem.ts    # React hook for easy access
└── types/
    └── design-system.ts      # TypeScript type definitions
```

## Quick Start

### 1. Using the Hook (Recommended)

```tsx
import { useDesignSystem } from '@/lib/hooks/useDesignSystem'

function MyComponent() {
  const { classes } = useDesignSystem()
  
  return (
    <div className={classes.components.card.container}>
      <h2 className={classes.text.primary}>Title</h2>
      <p className={classes.text.secondary}>Description</p>
      <button className={classes.components.button.primary}>
        Click me
      </button>
    </div>
  )
}
```

### 2. Direct Import

```tsx
import { getGradientClasses, getColorClasses } from '@/lib/design-system'

function MyComponent() {
  return (
    <div className={getGradientClasses('primary')}>
      <span className={getColorClasses('text', 'primary')}>
        Content
      </span>
    </div>
  )
}
```

## Color Palette

### Primary Colors (Yellow)
- **50**: `#fefce8` - Lightest
- **100**: `#fef9c3`
- **200**: `#fef08a`
- **300**: `#fde047`
- **400**: `#facc15` - Main brand color
- **500**: `#eab308`
- **600**: `#ca8a04` - Main brand color
- **700**: `#a16207`
- **800**: `#854d0e`
- **900**: `#713f12` - Darkest

### Neutral Colors (Zinc)
- **50**: `#fafafa` - Lightest
- **100**: `#f5f5f5`
- **200**: `#e5e5e5`
- **300**: `#d4d4d4`
- **400**: `#a3a3a3`
- **500**: `#737373`
- **600**: `#525252`
- **700**: `#404040`
- **800**: `#262626`
- **900**: `#171717` - Darkest

### Semantic Colors
- **Success**: Green palette for positive actions
- **Warning**: Amber palette for caution states
- **Error**: Red palette for error states

## Gradients

### Primary Gradients
```tsx
// Main brand gradient
classes.gradient.primary // from-yellow-400 to-yellow-600

// Hover state
classes.gradient.primaryHover // from-yellow-500 to-yellow-700

// Text gradients
classes.gradient.textPrimary // from-zinc-900 to-zinc-700 (dark mode: from-white to-yellow-400)
classes.gradient.textAccent // from-yellow-400 to-yellow-600
```

### Background Gradients
```tsx
// Light background
classes.gradient.backgroundLight // from-white to-zinc-100 (dark: from-zinc-900 to-black)

// Dark background
classes.gradient.backgroundDark // from-zinc-900 to-black
```

### Button Gradients
```tsx
// Primary button
classes.components.button.primary // from-yellow-400 to-yellow-600 with hover states

// Secondary button
classes.components.button.secondary // transparent with yellow hover
```

## Component Classes

### Cards
```tsx
const { classes } = useDesignSystem()

<div className={classes.components.card.container}>
  <h3 className={classes.components.card.header}>Card Title</h3>
  <p className={classes.components.card.content}>Card content</p>
</div>
```

### Buttons
```tsx
const { classes } = useDesignSystem()

// Primary button
<button className={classes.components.button.primary}>
  Primary Action
</button>

// Secondary button
<button className={classes.components.button.secondary}>
  Secondary Action
</button>

// Outline button
<button className={classes.components.button.outline}>
  Outline Action
</button>
```

### Icons
```tsx
const { classes } = useDesignSystem()

// Primary icon
<div className={classes.components.icon.primary}>
  <Icon className="w-7 h-7 text-white" />
</div>

// Secondary icon
<div className={classes.components.icon.secondary}>
  <Icon className="w-5 h-5 text-white" />
</div>

// Small icon
<div className={classes.components.icon.small}>
  <Icon className="w-4 h-4 text-white" />
</div>
```

### Sections
```tsx
const { classes } = useDesignSystem()

<section className={classes.components.section.container}>
  {/* Background gradient */}
  <div className={classes.components.section.background} />
  
  {/* Top border accent */}
  <div className={classes.components.section.border} />
  
  {/* Glow effect */}
  <div className={classes.components.section.glow} />
  
  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    {/* Your content here */}
  </div>
</section>
```

### Navigation
```tsx
const { classes } = useDesignSystem()

<nav className={classes.components.nav.container}>
  <a href="/" className={classes.components.nav.link}>
    Home
  </a>
  <a href="/about" className={classes.components.nav.linkActive}>
    About
  </a>
</nav>
```

### Hero Section
```tsx
const { classes } = useDesignSystem()

<section className="relative min-h-screen">
  {/* Video background */}
  <video className="absolute inset-0 w-full h-full object-cover">
    <source src="/hero_video.mp4" type="video/mp4" />
  </video>
  
  {/* Overlay */}
  <div className={classes.components.hero.overlay} />
  
  {/* Content */}
  <div className="relative z-20 container mx-auto px-4 text-center">
    <h1 className={classes.components.hero.title}>
      North America's
      <br />
      <span className={classes.components.hero.titleAccent}>
        Expedite Experts
      </span>
    </h1>
    <p className={classes.components.hero.subtitle}>
      Your tagline here
    </p>
  </div>
</section>
```

## Text Classes

```tsx
const { classes } = useDesignSystem()

// Primary text (dark in light mode, light in dark mode)
<h1 className={classes.text.primary}>Main Heading</h1>

// Secondary text (muted)
<p className={classes.text.secondary}>Secondary content</p>

// Muted text (subtle)
<span className={classes.text.muted}>Muted information</span>

// Accent text (yellow)
<span className={classes.text.accent}>Highlighted text</span>
```

## Background Classes

```tsx
const { classes } = useDesignSystem()

// Primary background
<div className={classes.background.primary}>Content</div>

// Secondary background
<div className={classes.background.secondary}>Content</div>

// Muted background
<div className={classes.background.muted}>Content</div>

// Accent background
<div className={classes.background.accent}>Content</div>
```

## Border Classes

```tsx
const { classes } = useDesignSystem()

// Primary border
<div className={`border ${classes.border.primary}`}>Content</div>

// Secondary border
<div className={`border ${classes.border.secondary}`}>Content</div>

// Accent border
<div className={`border ${classes.border.accent}`}>Content</div>
```

## Utility Functions

### getGradientClasses()
```tsx
import { getGradientClasses } from '@/lib/design-system'

// Get primary gradient
getGradientClasses('primary') // 'bg-gradient-to-r from-yellow-400 to-yellow-600'

// Get primary gradient with hover variant
getGradientClasses('primary', 'hover') // 'bg-gradient-to-r from-yellow-500 to-yellow-700'

// Get text gradient
getGradientClasses('text', 'primary') // 'bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-yellow-400 bg-clip-text text-transparent'
```

### getColorClasses()
```tsx
import { getColorClasses } from '@/lib/design-system'

// Get text color
getColorClasses('text', 'primary') // 'text-yellow-500'

// Get background color
getColorClasses('bg', 'neutral', '100') // 'bg-zinc-100'

// Get border color
getColorClasses('border', 'success', '500') // 'border-green-500'
```

## Migration Guide

### Before (Hardcoded Colors)
```tsx
// ❌ Don't do this
<div className="bg-gradient-to-r from-yellow-400 to-yellow-600">
  <h2 className="text-zinc-900 dark:text-white">Title</h2>
  <p className="text-zinc-600 dark:text-zinc-300">Content</p>
</div>
```

### After (Using Design System)
```tsx
// ✅ Do this
const { classes } = useDesignSystem()

<div className={classes.gradient.primary}>
  <h2 className={classes.text.primary}>Title</h2>
  <p className={classes.text.secondary}>Content</p>
</div>
```

## Best Practices

1. **Always use the design system** - Never hardcode colors or gradients
2. **Use the hook for components** - `useDesignSystem()` provides the best developer experience
3. **Use semantic class names** - `classes.text.primary` is better than `classes.text.neutral.900`
4. **Keep it consistent** - Use the same patterns across similar components
5. **Document new patterns** - If you create new component patterns, add them to the design system

## Adding New Colors or Gradients

1. Add the new color/gradient to `lib/design-system.ts`
2. Update the TypeScript types in `lib/types/design-system.ts`
3. Add utility functions if needed
4. Update this documentation
5. Migrate existing components to use the new tokens

## Troubleshooting

### TypeScript Errors
If you get TypeScript errors, make sure you're importing the correct types:
```tsx
import type { UseDesignSystemReturn } from '@/lib/types/design-system'
```

### Missing Classes
If a class combination doesn't exist, add it to the `classes` object in `useDesignSystem.ts`:
```tsx
// In lib/hooks/useDesignSystem.ts
components: {
  // ... existing components
  newComponent: {
    container: 'your-classes-here',
  },
}
```

### Performance
The hook uses `useMemo` to prevent unnecessary recalculations. The design system is optimized for performance and should not cause any performance issues. 