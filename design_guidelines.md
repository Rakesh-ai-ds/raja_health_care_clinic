# RAJA Health Care Clinic - Design Guidelines

## Design Approach

**Selected Framework**: Healthcare-Optimized Design System
Drawing from Material Design's clarity and Apple HIG's content-first approach, tailored for medical credibility and patient trust.

**Core Principles**:
- Clinical professionalism with approachable warmth
- Information hierarchy that prioritizes patient needs
- Trust-building through clear, structured content
- Accessibility-first for all age groups

---

## Typography System

**Font Families** (via Google Fonts CDN):
- Primary: 'Inter' - clean, highly legible for medical content
- Headings: 'Plus Jakarta Sans' - professional yet friendly

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Page Titles: text-4xl md:text-5xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-semibold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body Regular: text-base, font-normal
- Body Small: text-sm, font-normal
- Captions: text-xs, font-medium

**Line Heights**: Use generous spacing (leading-relaxed for body text) for medical content readability

---

## Layout System

**Spacing Primitives** (Tailwind units):
Primary scale: 2, 4, 6, 8, 12, 16, 20, 24, 32

**Container Strategy**:
- Full-width sections: w-full with max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy sections: max-w-4xl mx-auto
- Form containers: max-w-2xl mx-auto

**Section Padding**:
- Desktop: py-20 to py-32
- Tablet: py-16 to py-24
- Mobile: py-12 to py-16

**Grid Systems**:
- Services Grid: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Stats Display: grid grid-cols-2 md:grid-cols-4 gap-6
- Contact Info: grid grid-cols-1 lg:grid-cols-2 gap-12

---

## Component Library

### Navigation
**Desktop Header**:
- Fixed top navigation with backdrop blur
- Logo left, navigation center, CTA buttons right
- Navigation items: Home, About, Services, Our Doctor, Contact, Book Appointment
- Primary CTA: "Book Appointment" (elevated button with subtle shadow)
- Secondary CTA: Phone number with icon

**Mobile Navigation**:
- Hamburger menu with slide-out panel
- Full-screen overlay navigation
- Large touch targets (min h-12)

### Hero Section (Home Page)
**Layout**: Two-column split on desktop
- Left: Headline, tagline, description, dual CTAs
- Right: Professional medical imagery (doctor with patient or modern clinic interior)
- Height: min-h-[600px] md:min-h-[700px]
- Image treatment: Rounded corners (rounded-2xl) with subtle shadow

### Quick Stats Component
**Design**: Four-column grid on desktop, 2-column on tablet, stacked on mobile
- Large numbers: text-4xl md:text-5xl font-bold
- Labels: text-sm md:text-base uppercase tracking-wide
- Icons from Heroicons (medical-themed)
- Spacing: p-8 per stat card with hover elevation

### Services Cards
**Individual Card Structure**:
- Icon (Heroicons medical set) - w-12 h-12 within rounded background circle
- Service title: text-xl font-semibold
- Description: text-base leading-relaxed
- "Learn More" link with arrow icon
- Card padding: p-8
- Card treatment: Rounded (rounded-xl), border, hover shadow transition

### Doctor Profile Section
**Layout**: Asymmetric two-column
- Left: Professional headshot (rounded-2xl, w-full max-w-md)
- Right: Credentials, message, expertise
- Quote styling: Italic text in dedicated container with subtle background

### Forms (Contact & Appointment)
**Structure**:
- Label above input: text-sm font-medium mb-2
- Input fields: Full width, p-4, rounded-lg, border
- Focus states: Ring with offset
- Required field indicators: Asterisk in label
- Submit button: Full width on mobile, auto width on desktop
- Helper text: text-sm below inputs for guidance

**Field Spacing**: space-y-6 for form groups

**Appointment Form Fields**:
- Full Name (required)
- Email (required, with validation)
- Phone (required, with format helper)
- Preferred Date (date picker)
- Preferred Time (dropdown: Morning/Afternoon/Evening slots)
- Service/Department (dropdown of all services)
- Reason for Visit (textarea, optional with counter)

### Contact Information Display
**Layout Pattern**:
- Icon + Label + Value vertical stack
- Icons: Heroicons outline style, w-6 h-6
- Grouping: Address, Phone, WhatsApp, Email in cards
- Clinic Hours: Structured list with day-time pairs

### Footer
**Multi-column Structure**:
- Column 1: Clinic logo, tagline, social links
- Column 2: Quick Links (all main pages)
- Column 3: Services (top 5 services)
- Column 4: Contact info summary
- Bottom bar: Copyright, credentials, designed by credit

---

## Page-Specific Structures

### Home Page Sections (in order):
1. Hero with dual CTA
2. Quick Stats (4 metrics)
3. Welcome Message (centered, max-w-3xl)
4. Featured Services (6 cards in 3-column grid)
5. Why Choose Us (3 value propositions with icons)
6. Doctor Introduction Preview (with CTA to full profile)
7. Patient Testimonials (3 cards with ratings)
8. Emergency Notice Banner (clinic hours, emergency contact)
9. Final CTA Section (Book Appointment focus)

### Services Page:
- Page header with description
- All 10+ services in masonry/grid layout
- Each service: Full card with icon, title, detailed description, related conditions list
- Sidebar: Quick navigation to jump to service categories

### About Us Page:
- Mission/Vision/Values cards (3 equal columns)
- Facility highlights with supporting imagery
- Clinic timeline/milestones
- Team approach explanation
- Certifications/accreditations display

### Our Doctor Page:
- Hero section with large professional photo
- Credentials prominently displayed
- Personal message in blockquote style
- Areas of expertise as badges/pills
- Education timeline
- Professional memberships
- CTA: Schedule consultation

### Contact Page:
- Two-column layout: Form left, Information right
- Embedded map placeholder (<!-- EMBED: Google Maps -->)
- Alternative contact methods highlighted
- Clinic hours with today's status indicator
- Directions/parking information

### Book Appointment Page:
- Progress indicator if multi-step (current: single form)
- Form with all fields clearly labeled
- Availability calendar visual (<!-- FUTURE: Real-time availability -->)
- Confirmation message design (post-submission state)
- What to expect next: Clear instructions

---

## Images

**Required Images**:

1. **Hero Image (Home)**: Professional photo of Dr. Raja in white coat in modern clinic setting or consultation with patient - warm, trustworthy. Placement: Right side of hero section, 50% width on desktop. Dimensions: 800x900px minimum.

2. **Doctor Profile (Our Doctor Page)**: High-quality professional headshot of Dr. Raja, ideally in clinical setting. Placement: Left side of profile section, max-width 400px. Format: Portrait orientation, rounded corners.

3. **Facility Images (About Page)**: 
   - Modern reception area: Shows welcoming environment
   - Consultation room: Professional medical equipment visible
   - Waiting area: Comfortable, clean space
   Placement: Gallery grid, 3 images side-by-side. Each 400x300px.

4. **Service Icons**: Use Heroicons CDN - do not generate custom SVGs. Medical-themed icons: 
   - Brain icon for general neurology
   - Lightning for epilepsy
   - Activity for stroke
   - Moon for sleep disorders
   - User for pediatric care
   - etc.

**Image Treatment Throughout**:
- All photos: rounded-xl or rounded-2xl
- Subtle shadow: shadow-lg for depth
- Aspect ratio preservation: object-cover
- Loading optimization: lazy loading for below-fold images

---

## Interactive Elements

**Buttons**:
- Primary: Solid fill, py-3 px-8, rounded-lg, font-semibold
- Secondary: Outlined, same padding
- Text buttons: Underline on hover
- Icon buttons: p-2, rounded-full
- Hover: Subtle scale (hover:scale-105) with transition

**Links**:
- Inline links: Underline on hover
- Card links: Entire card clickable with hover elevation
- Navigation links: No underline, subtle opacity change

**Form Inputs**:
- Default: Border with neutral tone
- Focus: Ring effect, border emphasis
- Error: Red border with error message below
- Success: Green border with checkmark icon

**Transitions**: transition-all duration-300 ease-in-out for interactive elements

---

## Accessibility Standards

- Minimum touch target: 44x44px for all interactive elements
- Form labels always visible (no placeholder-only inputs)
- Error messages announced via aria-live
- Keyboard navigation fully supported
- Focus indicators clearly visible
- Color contrast minimum 4.5:1 for text
- Alt text for all images with descriptive context

---

## Email Integration Notes

Contact and Appointment forms submit to backend endpoint that uses Resend API. Include clear success/error states with appropriate messaging. Success state should confirm email sent and set expectations for response time (24-48 hours).