# Copilot Instructions - Sunshine Coast Logistics

## Project Overview
This is a Next.js 15 logistics company website with WordPress headless CMS integration, featuring a sophisticated design system and WordPress asset management.

## Architecture & Key Patterns

### Design System (`lib/design-system.ts`)
- **Centralized color/gradient tokens**: All colors defined in `lib/design-system.ts` with semantic mappings
- **Hook-based access**: Use `useDesignSystem()` hook for consistent theming in components
- **Migration script**: `npm run design-system:analyze` identifies hardcoded colors for conversion
- **Class structure**: Access via `classes.text.primary`, `classes.gradient.primary`, etc.

### WordPress Integration
- **GraphQL proxy**: All WordPress requests go through `/api/wordpress` to avoid CORS
- **Asset management**: `WordPressImage` component handles optimized image loading with fallbacks
- **Hook pattern**: `useWordPressAssets()` provides centralized asset fetching
- **Environment flexibility**: Supports both production and development WordPress instances

### API Routes Structure
- `/api/contact`: Gmail-based contact form with reCAPTCHA validation
- `/api/wordpress`: GraphQL proxy for WordPress headless CMS
- `/api/job-application`: Application submission handling

## Development Workflow

### Environment Setup
```bash
# Required .env.local variables:
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password  # Use Gmail App Password, not regular password
CONTACT_TO_EMAIL=email@email.com
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-url
```

### Development Commands
- `npm run dev` - Development server with Turbopack
- `npm run design-system:analyze` - Identify hardcoded colors for migration
- `npm run build` - Production build with optimizations

### Performance Optimizations
- **Image optimization**: Configured for WordPress assets with AVIF/WebP formats
- **Scroll performance**: Use `{ passive: true }` listeners and `useCallback` for scroll handlers
- **Component lazy loading**: Framer Motion animations with proper cleanup
- **CSS Critical Path**: Optimized with Critters for critical CSS inlining

## Component Patterns

### WordPress Assets
```tsx
// Use WordPressImage for WordPress media
<WordPressImage slug="asset-slug" className="..." width={400} height={300} />

// Hook for asset data
const { getAssetBySlug, loading } = useWordPressAssets()
```

### Design System Usage
```tsx
const { classes } = useDesignSystem()
// Use: classes.text.primary, classes.gradient.primary, etc.
```

### Animation Patterns
- Use Framer Motion with `useScroll`, `useTransform` for scroll-based animations
- Always include cleanup in `useEffect` for scroll listeners
- Use `AnimatePresence` for conditional animations

## Data Management

### Master Data
- All static content centralized in `lib/data.ts` (contact info, navigation, stats)
- WordPress content accessed via Apollo Client (`lib/apollo-client.ts`)
- Type safety enforced with TypeScript interfaces in `lib/types/`

### Contact Form Flow
1. Client-side validation
2. reCAPTCHA verification
3. Server-side validation in `/api/contact`
4. Gmail SMTP delivery via Nodemailer

## File Organization Conventions

- **Components**: Feature-based organization in `/components`
- **UI Components**: Reusable elements in `/components/ui`
- **Utilities**: Business logic in `/lib` with barrel exports via `index.ts`
- **Types**: Centralized TypeScript definitions in `/lib/types`
- **Hooks**: Custom hooks in `/lib/hooks`

## Critical Dependencies

- **Apollo Client**: WordPress GraphQL integration
- **Framer Motion**: Performance-optimized animations
- **Tailwind CSS v4**: Styling with design system integration
- **Nodemailer**: Email functionality
- **reCAPTCHA**: Form protection

## WordPress Integration Notes

- WordPress URL configurable via environment variables
- Image paths constructed as `${WORDPRESS_URL}/wp-content/uploads/**`
- GraphQL endpoint: `${WORDPRESS_URL}/graphql`
- Fallback error handling for invalid WordPress URLs/assets
- Next.js Image optimization configured for WordPress domain patterns
