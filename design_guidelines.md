# HomeAura Premium Furniture Brand - Design Guidelines

## Design Approach

**Reference-Based Inspiration**: Draw from premium furniture leaders like Poliform, Bolia, and Lulu & Georgia—combining editorial sophistication with warm, approachable elegance. Create a magazine-quality experience that feels inviting rather than cold or pretentious.

## Typography System

**Primary Font**: Playfair Display (serif) for headlines and editorial moments
**Secondary Font**: Inter (sans-serif) for body text and UI elements
**Hierarchy**:
- Hero Headlines: 4xl to 6xl, serif, font-normal
- Section Titles: 3xl to 4xl, serif, font-normal
- Subsections: xl to 2xl, sans-serif, font-medium
- Body Text: base to lg, sans-serif, font-normal, leading-relaxed
- Captions/Labels: sm, sans-serif, font-light, tracking-wide uppercase

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
**Container Strategy**:
- Maximum content width: max-w-7xl for sections
- Text content: max-w-4xl for readability
- Full-bleed images: w-full with contained inner content
**Vertical Rhythm**: py-16 to py-32 for section spacing (responsive)

## Page Structure & Components

### 1. Hero Section (Full viewport - 90vh)
- Full-screen high-quality lifestyle image showing luxury living room interior
- Centered content overlay with translucent backdrop
- Headline: "Elevate Every Moment at Home"
- Subheadline: "Premium furniture crafted for modern living"
- Primary CTA button with blurred background: "Explore Collections"
- Secondary link: "View Showroom"
- GSAP: Parallax scroll on background image, fade-in stagger for text elements

### 2. Brand Story Section
- Two-column layout: left text, right lifestyle image (bedroom scene)
- Editorial-style layout with generous whitespace
- Pull quote highlighting craftsmanship philosophy
- GSAP: Fade-in on scroll with slight upward motion

### 3. Collections Showcase
- Three-column grid on desktop (Living Room, Bedroom, Office)
- Large card format with:
  - High-quality collection image (curated room setting)
  - Collection title overlay at bottom
  - Subtle hover state revealing "View Collection" link
  - Item count (e.g., "24 pieces")
- GSAP: Stagger animation on scroll, smooth scale on hover

### 4. Featured Products Carousel
- Horizontal scrolling showcase with 4-5 signature pieces
- Product cards: large image, product name, starting price, "View Details" link
- Smooth drag-to-scroll functionality
- GSAP: Entrance animation, smooth carousel transitions

### 5. Craftsmanship Section
- Full-width image of artisan working (workshop scene)
- Overlay grid showing: Materials Used, Years of Experience, Sustainability Commitment
- Icon + stat + description format
- GSAP: Counter animations for statistics, fade-in for content

### 6. Customer Testimonials
- Elegant three-card layout with customer photos
- Quote-focused design with large quotation marks
- Customer name, location, and purchased item
- Testimonial content emphasizes comfort, quality, durability
- GSAP: Horizontal carousel with smooth transitions, auto-play option

### 7. Lifestyle Gallery
- Masonry grid layout (Pinterest-style) showcasing various room settings
- Mix of living rooms, bedrooms, offices, dining spaces
- Subtle hover overlay with room name
- GSAP: Reveal animation on scroll with stagger effect

### 8. Strong CTA Section
- Full-width section with subtle textured background overlay
- Centered layout with:
  - Headline: "Transform Your Space Today"
  - Subtext: "Visit our showroom or schedule a virtual consultation"
  - Two prominent CTAs: "Book Consultation" + "Browse Catalog"
- GSAP: Magnetic cursor effect on buttons, smooth entrance

### 9. Footer (Comprehensive)
- Four-column layout:
  - Column 1: Brand logo, tagline, social media icons
  - Column 2: Quick links (Collections, About, Contact, Showroom)
  - Column 3: Customer service (FAQ, Shipping, Returns, Care Guide)
  - Column 4: Newsletter signup with input field and subscribe button
- Bottom bar: Copyright, Privacy Policy, Terms, Accessibility
- Subtle entrance animation

## Multi-Page Architecture

**Homepage**: As described above
**Collections Page**: Grid of all collections with filtering by room, style, price
**Individual Collection Pages**: Product grid with sidebar filters, hero image for collection
**About Page**: Brand story, team, sustainability commitments, craftsmanship process
**Contact Page**: Two-column (contact form + showroom info with map), office hours, phone, email

## Images Strategy

**Hero**: Luxurious living room with warm natural light, neutral furniture, plants (Pexels/Unsplash)
**Collections**: High-end curated room settings for each category
**Products**: Multiple angles, lifestyle context shots
**Testimonials**: Customer portrait photos (diverse, authentic)
**Gallery**: 12-15 inspirational interior images across different room types
**About**: Workshop/craftsman images, material close-ups
**Total Images Needed**: 30-40 high-quality photos from Pexels/Unsplash furniture collections

## GSAP Animation Principles

**Page Load**: Stagger fade-in for hero elements (0.2s delays)
**Scroll Triggers**: Fade-in + slight Y-axis motion for sections entering viewport
**Parallax**: Hero background, featured images move at 0.5x scroll speed
**Hover**: Smooth scale (1.02-1.05) for cards and images
**Carousel**: Smooth horizontal drag with momentum
**Magnetic Cursor**: Subtle attraction effect on CTA buttons (desktop only)
**Page Transitions**: Fade + slide for route changes
**Keep Subtle**: Enhance, don't distract—animations serve content

## Responsive Behavior

**Desktop (lg:)**: Multi-column layouts as specified, full animations
**Tablet (md:)**: Two-column grids, maintained animations
**Mobile**: Single column stacking, simplified animations, thumb-friendly spacing
**Touch Optimization**: Larger tap targets (min 44px), swipe-friendly carousels

## Component Enrichment

**Navigation**: Logo, main links (Collections, About, Showroom, Contact), search icon, cart icon, trust badge ("Since 2010")
**Product Cards**: Image, title, price range, quick view button, wishlist heart icon
**Form Inputs**: Floating labels, validation states, helpful error messages
**Trust Indicators**: Free shipping banner, warranty badge, eco-friendly certification icons