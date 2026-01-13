# Technology Stack

**Analysis Date:** 2026-01-13

## Languages

**Primary:**
- TypeScript 5.0+ - All application code (`package.json`, `tsconfig.json`)

**Secondary:**
- JavaScript (ES2020+) - Build scripts, config files (`rollup.config.js`, `eslint.config.js`)
- CSS (with Tailwind directives) - `src/index.css`
- JSX/TSX - React component files throughout

## Runtime

**Environment:**
- Node.js (ES module format) - `package.json` (`"type": "module"`)
- Browser environment (React 18/19) - peerDependencies in `package.json`

**Package Manager:**
- npm 11.7.0 - `package.json` (listed as devDependency)
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 18.0.0 || 19.0.0 - UI library (peerDependencies in `package.json`)
- TailwindCSS 4.1.18 - Utility-first CSS framework (`package.json`, `src/index.css`)

**Testing:**
- Jest - Unit testing (`package.json`, `tsconfig.test.json`)
- @testing-library/react 16.1.0 - React component testing (`package.json`)
- @testing-library/jest-dom 6.6.3 - Jest DOM matchers (`package.json`, `src/setupTests.ts`)

**Build/Dev:**
- Rollup 4.54.0 - Module bundling (`rollup.config.js`)
- Storybook 10.1.11 - Component documentation (`package.json`, `.storybook/main.ts`)
- Vite (via @storybook/react-vite) - Dev server (`.storybook/main.ts`)
- TypeScript 5.0+ - Type checking and compilation (`tsconfig.json`)
- PostCSS 8.5.6 - CSS processing (`package.json`)

## Key Dependencies

**Critical:**
- Radix UI (`@radix-ui/*`) - Headless UI primitives (17+ packages for dialog, dropdown, tabs, etc.) - `package.json`
- class-variance-authority 0.7.1 - Component variant management - `package.json`
- clsx 2.1.1 + tailwind-merge 3.4.0 - Class name utilities - `package.json`, `src/lib/utils.ts`

**Infrastructure:**
- react-hook-form 7.69.0 - Form state management - `package.json`
- zod 4.3.4 - Schema validation - `package.json`
- lucide-react 0.562.0 - Icon library - `package.json`
- motion 12.23.26 - Animation library - `package.json`
- recharts 2.15.4 - Charts - `package.json`, `src/components/ui/chart.tsx`
- embla-carousel-react 8.6.0 - Carousel - `package.json`, `src/components/ui/carousel.tsx`
- cmdk 1.1.1 - Command palette - `package.json`
- sonner 2.0.7 - Toast notifications - `package.json`

## Configuration

**Environment:**
- No environment variables required (component library)
- Configuration via props and CSS custom properties

**Build:**
- `tsconfig.json` - TypeScript configuration with path aliases
- `rollup.config.js` - Bundle configuration (CJS + ESM output)
- `.storybook/main.ts` - Storybook Vite builder configuration
- `.prettierrc` - Code formatter with TailwindCSS plugin
- `eslint.config.js` - Linting with TypeScript and Storybook plugins

## Platform Requirements

**Development:**
- Any platform with Node.js
- No external dependencies (Docker, databases, etc.)

**Production:**
- Distributed as npm package
- Dual format output: ESM (`dist/index.mjs`) + CJS (`dist/index.js`)
- TypeScript definitions included (`dist/index.d.ts`)
- Consumed in React 18/19 applications

---

*Stack analysis: 2026-01-13*
*Update after major dependency changes*
