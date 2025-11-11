# HomeAura Premium Furniture E-Commerce Application

## Overview

HomeAura is a premium furniture brand landing page focused on delivering an elegant, magazine-quality browsing experience. The frontend-only application showcases luxury furniture collections through carefully curated stock imagery and sophisticated design with GSAP animations. The platform emphasizes visual storytelling, craftsmanship, and modern living aesthetics with a warm, earthy color palette.

**Current Status**: Production-ready frontend implementation (November 2025)
- 5 complete pages with GSAP scroll animations
- 38+ high-quality stock images from Pexels/Unsplash
- Dark mode support with theme persistence
- Fully responsive design
- Contact form with validation
- Comprehensive e2e test coverage

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React with TypeScript**: Type-safe component-based architecture using functional components and hooks
- **Vite**: Modern build tool providing fast development server with HMR (Hot Module Replacement)
- **Wouter**: Lightweight client-side routing library for navigation between pages

**UI Component Strategy**
- **shadcn/ui**: Component library built on Radix UI primitives with Tailwind CSS styling
- **Component Organization**: Centralized UI components in `client/src/components/ui/` with shared components like Navigation and Footer in `client/src/components/`
- **Design System**: Custom theme based on warm, earthy color palette defined in CSS variables with support for light/dark modes

**Styling Approach**
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Typography System**: Dual-font approach using Playfair Display (serif) for headlines and Inter (sans-serif) for body text
- **Color Palette**: Custom HSL-based color system with warm, neutral tones (browns, beiges, muted greens)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

**Animation & Interactions**
- **GSAP (GreenSock Animation Platform)**: Professional-grade animation library for scroll-triggered effects
- **ScrollTrigger Plugin**: Enables parallax effects, fade-ins, and staggered animations on scroll
- **Custom Hooks**: `useGsapFadeIn`, `useGsapParallax`, and `useGsapStagger` encapsulate animation logic for reusability
  - Each hook maintains its own ScrollTrigger instance in a ref to prevent cross-contamination on unmount
  - Cleanup properly scoped to only kill the specific trigger created by each hook instance

**State Management**
- **TanStack Query (React Query)**: Server state management for data fetching, caching, and synchronization
- **React Context**: Theme management through `ThemeProvider` for light/dark mode switching
- **React Hook Form**: Form state management with Zod schema validation

### Backend Architecture

**Server Framework**
- **Express.js**: Minimal Node.js web framework handling HTTP requests
- **TypeScript with ESM**: Modern module system for server-side code
- **Development Setup**: Hot-reload development server using `tsx`

**Application Structure**
- **Layered Architecture**: Clear separation between routing (`server/routes.ts`), storage layer (`server/storage.ts`), and server setup (`server/index.ts`)
- **Storage Interface**: Abstract `IStorage` interface enables swapping between in-memory and database implementations
- **Current Implementation**: `MemStorage` provides in-memory data storage using Maps (suitable for development/prototyping)

**Middleware Pipeline**
- **Body Parsing**: JSON and URL-encoded request body parsing with raw body preservation for webhook verification
- **Request Logging**: Custom logging middleware tracking API request duration and responses
- **Vite Integration**: Development mode serves client through Vite middleware for HMR support

### Data Layer

**Database Setup**
- **Drizzle ORM**: Type-safe SQL query builder and schema definition
- **PostgreSQL Dialect**: Configured for PostgreSQL with Neon serverless driver
- **Schema Location**: Shared schema definitions in `shared/schema.ts` accessible to both client and server

**Data Models**
- **Users Table**: Basic user authentication schema with username/password (not currently used)
- **Contact Form Schema**: Zod validation schema for contact form (name, email, phone optional, message)
- **Validation Schemas**: Zod schemas derived from Drizzle tables using `createInsertSchema`
- **Type Safety**: TypeScript types inferred from database schema for compile-time safety
- **Note**: Current implementation is frontend-only with no active database integration

**Migration Strategy**
- **Drizzle Kit**: Database migration tool configured to generate migrations in `./migrations`
- **Push Command**: `db:push` script for applying schema changes directly to database

### Project Structure

**Monorepo Organization**
- **client/**: Frontend React application with pages, components, and assets
- **server/**: Express backend with routes and storage logic
- **shared/**: Shared TypeScript code (schemas, types) used by both client and server
- **Path Aliases**: TypeScript path mapping (`@/`, `@shared/`, `@assets/`) for clean imports

**Page Architecture**
- **Home** (`/`): Hero section with parallax image, collections preview cards (Living Room, Bedroom, Office), craftsmanship stats, customer testimonials with 5-star ratings, inspiration gallery grid, CTA section
- **Collections** (`/collections`): Overview page displaying all three furniture collections with hero images and descriptions
- **Collection Detail** (`/collection/[type]`): Individual collection pages for living-room, bedroom, and office with product grids and collection-specific content
- **About** (`/about`): Brand story, mission statement, values (quality, sustainability, innovation), and team/craftsmanship focus
- **Contact** (`/contact`): Contact form with react-hook-form + zod validation, contact info cards (address, phone, email, hours), map placeholder, consultation booking CTA

**Asset Management**
- **Static Images**: 38+ high-quality lifestyle and product photography from Pexels and Unsplash stored in `attached_assets/stock_images/`
- **Image Strategy**: Curated imagery focusing on aspirational living spaces, modern furniture, craftsmanship, and happy customers
- **Vite @assets Alias**: Images imported using `@assets/stock_images/[filename]` path alias configured in vite.config.ts
- **Categories**: Hero images, collection previews, customer testimonials, artisan/craftsman, inspiration gallery

### Development Workflow

**Build & Deployment**
- **Development**: Client served through Vite dev server with Express API proxy
- **Production Build**: 
  - Client: Vite bundles React app to `dist/public`
  - Server: esbuild bundles Express server to `dist/index.js`
- **Environment Variables**: `DATABASE_URL` required for database connection

**Type Checking**
- **TypeScript Compilation**: Strict mode enabled with comprehensive type checking
- **Check Script**: Separate type checking without emission for CI/CD pipelines

## External Dependencies

**UI Component Libraries**
- **Radix UI**: Unstyled, accessible component primitives (dialogs, dropdowns, navigation menus, etc.)
- **Lucide React**: Icon library providing consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs
- **tailwind-merge & clsx**: Utilities for conditional and merged Tailwind classes

**Form Handling**
- **React Hook Form**: Form state management with performance optimizations
- **@hookform/resolvers**: Integration layer for schema validation
- **Zod**: TypeScript-first schema validation library

**Animation Libraries**
- **GSAP**: Core animation library (registered via CDN in design guidelines)
- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **Embla Carousel**: Carousel/slider component for product galleries

**Data Fetching & State**
- **TanStack Query**: Async state management for server data
- **React Router**: Wouter provides lightweight routing

**Database & ORM**
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **Drizzle Kit**: CLI tool for migrations and schema management
- **Drizzle Zod**: Schema-to-Zod validation integration

**Session Management**
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured but not fully implemented)

**Development Tools**
- **Vite Plugins**: Runtime error overlay, Replit cartographer, dev banner
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **date-fns**: Date utility library for formatting and manipulation

**Font Integration**
- **Google Fonts**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Typography System**: Configured in tailwind.config.ts with font-serif and font-sans classes
- **Design Philosophy**: Classic serif headlines paired with modern sans-serif body creates elegant, readable hierarchy

## Recent Changes (November 2025)

### GSAP Animation System Improvements
- Refactored all GSAP hooks to store their own ScrollTrigger instances in refs
- Fixed cross-contamination issue where unmounting one component would kill all ScrollTrigger instances
- Each hook now properly scopes cleanup to only its own triggers

### Contact Form Implementation
- Rebuilt using react-hook-form with zodResolver for proper validation
- Integrated shadcn Form components following stack guidelines
- Added success toast notification on submission
- Form resets after successful submission

### Dark Mode Support
- Implemented ThemeProvider with light/dark mode switching
- Theme preference persists to localStorage
- Added ThemeToggle component in navigation
- All color variables configured for both light and dark modes in index.css

### Theme & Design System
- Warm earthy color palette: Beige (#F5F1E8), Taupe (#D4C5B9), Terracotta (#C67B5C), Olive Green (#8B9474)
- Custom HSL color variables for consistent theming
- Smooth scroll behavior enabled site-wide
- Responsive design with mobile-first approach

### Testing & Quality Assurance
- Comprehensive e2e test suite covering all major user journeys
- Validated GSAP animations, navigation, form validation, dark mode, responsive design
- All tests passing with no blocking issues
- Production-ready deployment status confirmed