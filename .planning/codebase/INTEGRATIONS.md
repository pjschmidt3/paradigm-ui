# External Integrations

**Analysis Date:** 2026-01-13

## APIs & External Services

**Payment Processing:**
- Not applicable - Component library (no payment integration)

**Email/SMS:**
- Not applicable - Component library (no email/SMS integration)

**External APIs:**
- Not applicable - Component library (no external API calls)

## Data Storage

**Databases:**
- Not applicable - Component library (no database integration)

**File Storage:**
- Not applicable - Component library (no file storage)

**Caching:**
- Not applicable - Component library (no caching layer)

## Authentication & Identity

**Auth Provider:**
- Not applicable - Component library (authentication is consumer responsibility)

**OAuth Integrations:**
- Not applicable - No OAuth integration

## Monitoring & Observability

**Error Tracking:**
- Not detected - No Sentry, LogRocket, or similar

**Analytics:**
- Not detected - No analytics integration

**Logs:**
- None - Component library outputs no logs
- Console mocked in tests (`src/setupTests.ts`)

## CI/CD & Deployment

**Hosting:**
- npm registry - Distributed as npm package
- GitHub repository - Source control (`package.json` repository field)

**CI Pipeline:**
- Not detected - No GitHub Actions workflows visible
- Manual testing via npm scripts

**Distribution:**
- npm package: `paradigm-ui@0.1.0`
- Formats: ESM (`dist/index.mjs`), CJS (`dist/index.js`), Types (`dist/index.d.ts`)

## Environment Configuration

**Development:**
- Required env vars: None
- Secrets location: Not applicable
- Local dev: `npm run dev` starts Storybook on port 6006

**Staging:**
- Not applicable - Component library

**Production:**
- Distributed via npm
- No runtime environment variables

## Webhooks & Callbacks

**Incoming:**
- Not applicable

**Outgoing:**
- Not applicable

## Third-Party UI Libraries

**Radix UI Primitives:**
- 17+ packages for headless UI components
- Used by: `src/components/ui/*.tsx`
- Packages: accordion, alert-dialog, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toggle, toggle-group, tooltip

**Styling:**
- TailwindCSS 4.1.18 - Utility classes
- tw-animate-css 1.4.0 - Animation utilities
- prettier-plugin-tailwindcss - Class ordering

**Animation:**
- motion 12.23.26 (Framer Motion) - Animation library
- Used by: `registry/new-york/ui/appear.tsx`

**Data Visualization:**
- recharts 2.15.4 - Charting library
- Used by: `src/components/ui/chart.tsx`

**Form Handling:**
- react-hook-form 7.69.0 - Form state
- @hookform/resolvers 5.2.2 - Validation resolvers
- zod 4.3.4 - Schema validation
- Used by: `src/components/ui/form.tsx`

**Other UI Components:**
- embla-carousel-react 8.6.0 - Carousel (`src/components/ui/carousel.tsx`)
- cmdk 1.1.1 - Command palette (`src/components/ui/command.tsx`)
- sonner 2.0.7 - Toast notifications
- vaul 1.1.2 - Drawer component
- input-otp 1.4.2 - OTP input
- react-resizable-panels 4.2.0 - Resizable panels
- next-themes 0.4.6 - Theme switching

**Icons:**
- lucide-react 0.562.0 - Icon library
- react-icons 5.5.0 - Additional icons

## Build & Development Tooling

**Build:**
- Rollup 4.54.0 - Module bundler (`rollup.config.js`)
- TypeScript 5.0+ - Type checking (`tsconfig.json`)
- PostCSS 8.5.6 - CSS processing

**Development:**
- Storybook 10.1.11 - Component documentation (`.storybook/main.ts`)
- Vite (via @storybook/react-vite) - Dev server

**Testing:**
- Jest - Test runner
- @testing-library/react 16.1.0 - Component testing
- @testing-library/jest-dom 6.6.3 - DOM assertions

## Summary

This is a **component library** with:
- **Zero external service integrations** (no APIs, databases, auth)
- **Zero environment variables** required
- **No CI/CD pipeline** detected
- **Rich third-party UI integrations** (Radix UI, animation, forms)
- **Distribution via npm** as the primary deployment target

All external dependencies are build-time or consumer-facing libraries, not runtime services.

---

*Integration audit: 2026-01-13*
*Update when adding/removing external services*
