# Premium Dog Food Product Page

A responsive product landing page for a premium dog food brand, built with React, TypeScript, Tailwind CSS v4, and Vite.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework (using the new Vite plugin)
- **Vite 7** - Build tool with hot module replacement (HMR)

## Project Structure

```
src/
├── assets/
│   ├── images/          # Product images, payment icons, backgrounds
│   └── svg/             # SVG icon components (Food, Fresh, Ingredient, Vet)
├── components/
│   ├── sections/        # Page sections
│   │   ├── HeroFeatures.tsx    # Hero section with feature cards
│   │   ├── Statistics.tsx      # Stats section with percentages
│   │   ├── ProductHighlight.tsx # Product benefits with image
│   │   ├── Benefits.tsx        # Prebiotics/digestive health section
│   │   └── FeatureItem.tsx     # Reusable feature card component
│   └── ui/
│       └── Button.tsx   # Reusable button component
├── types/
│   └── index.ts         # TypeScript interfaces
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind import
```

## Sections Overview

1. **HeroFeatures** - Displays 4 key product features (Real Food, Made Fresh, Premium Ingredient, Vet Developed) with a central product image, CTA button, and payment method icons.

2. **Statistics** - Shows key statistics (97%, 84%, 92%) highlighting product effectiveness with descriptions.

3. **ProductHighlight** - Image and text section about gastrointestinal health benefits.

4. **Benefits** - Information about prebiotics and digestive health support.

## Key Implementation Details

### Tailwind CSS v4 Setup
The project uses Tailwind v4 with the Vite plugin (`@tailwindcss/vite`). Configuration is done via CSS:

```css
/* src/index.css */
@import "tailwindcss";
```

### Responsive Design
- Mobile-first approach using Tailwind breakpoints (`md:`, `lg:`)
- Flex layouts that switch from column to row on larger screens
- Responsive typography with different sizes for mobile/desktop

### Reusable Components
- **Button** - Configurable with `primary` and `secondary` variants
- **FeatureItem** - Displays icon, title, and description with left/right positioning

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Code Explanation

### Button Component (`src/components/ui/Button.tsx`)
A reusable button with consistent styling:
- Horizontal flex layout with centered content
- Full width with 48px height
- 6px border radius
- 12px vertical / 40px horizontal padding
- 10px gap between child elements
- Two variants: `primary` (solid orange) and `secondary` (outlined)

### Layout Pattern
Each section uses the `main-container` class for consistent max-width (1400px) and centered content with 90% width.

### Flex Layout Pattern
Sections use a common pattern for responsive two-column layouts:
```jsx
<div className="flex flex-col-reverse lg:flex-row items-center gap-8">
  <div className="flex-1">Content</div>
  <div className="flex-1">Image</div>
</div>
```
