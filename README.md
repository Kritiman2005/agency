# Premium Digital Agency Website

A pixel-perfect, award-winning style premium digital agency website inspired by high-end design aesthetics (Apple × Linear × Framer × Awwwards). Built with **React**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis smooth scrolling**.

## 🌟 Visual & Design System

- **Aesthetic**: Luxury, minimal, and modern dark-orange glow (`#ff5b2e`, `#ff6a3d`, `#ff7d4d`).
- **Typography**: Display headlines in **Syne** (bold, high-character display font) and UI/body elements in **Outfit** (clean, readable geometric sans-serif).
- **Background**: Pure pitch-black (`#050505`) with a global film-grain noise texture overlay and large radial accent glows behind structural sections.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-variable-based customization theme system)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (scroll-linked parallax, stagger, and spring physics)
- **Scroll Behavior**: [Lenis Smooth Scroll](https://lenis.darkroom.engineering/) (60fps native-like scroll smoothing)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (clean, vector logo and utility icons)

---

## 🚀 Key Features

### 1. Interactive Navbar
Transparent header that transitions into a glassmorphic border (`backdrop-blur-md bg-black/40 border-b border-white/5`) upon scrolling past the hero. Includes a fully responsive animated mobile overlay menu.

### 2. Immersive Hero Section
- **Stagger reveals**: The headline and subheadings fade and lift on load.
- **Parallax composition**: Multi-layered floating image cards representing agency projects/materials move at varying speeds as the user scrolls.
- **Cursor tracking**: Floating cards slightly pivot/follow the user's mouse pointer using spring physics.
- **Overlapping layout**: Sub-elements overlap card borders, recreating the exact layout depth of premium designs.

### 3. Infinite Testimonials Marquee
A luxury auto-scrolling testimonial ticker. Seamlessly loops and pauses automatically on hover.

### 4. Interactive Services Grid
A sticky two-column layout showing 5 core services. Features glassmorphic cards that reveal glowing orange borders and radial shadows on hover.

### 5. Staggered Featured Work Grid
6 client case studies (SaaS Dashboard, Fitness App, AI Assistant, E-Commerce, Real Estate Portal, Healthcare Telehealth) arranged in an asymmetric editorially-curated layout.

### 6. Interactive Process Timeline
A horizontal progress timeline on desktop (collapses to vertical on mobile) featuring a scroll-linked connecting line that animates/draws itself as you scroll.

### 7. Intersection Counter Metrics
Live metric counters (e.g. 50+ Projects, 20+ Clients, 95% Retention) that count up to their target values once they enter the user's viewport.

---

## 📁 File Structure

```text
src/
 ├─ components/
 │   ├─ Navbar.jsx        # Glassmorphic, sticky navigation header
 │   ├─ Hero.jsx          # Centerpiece with mouse-tracking floating cards
 │   ├─ Services.jsx      # Sticky left, glow cards on the right
 │   ├─ Work.jsx          # Staggered project cards
 │   ├─ Process.jsx       # Timeline with scroll-triggered SVG tracker
 │   ├─ Testimonials.jsx  # Infinite auto-scrolling feedback carousel
 │   ├─ CTA.jsx           # Glowing end-of-page discovery trigger
 │   └─ Footer.jsx        # Logo watermark and links
 ├─ pages/
 │   └─ Home.jsx          # Main landing assembly (Trusted By, Why Choose Us, About)
 ├─ App.css               # Cleared layout resets
 ├─ App.jsx               # Lenis scroll controller and noise overlay
 ├─ index.css             # Tailwind v4 configuration, glows, marquee animations
 └─ main.jsx              # Main mount file
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js (version 18+) installed on your machine.

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd agency
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build the application for production:
   ```bash
   npm run build
   ```

---

## 📝 Markdown Blogs Feature

A custom-built single-file blogging system to easily write, manage, and read blogs with high-end typography and perfect SEO.

### 1. Managing Blogs
All blog data and content is stored in a single file: `src/lib/blogData.js`. 
To add a new blog, simply append a new object to the `BLOGS` array. You can write the actual content using standard Markdown syntax (e.g., `# Heading`, `**bold**`, `[link](url)`) inside backticks (`\``) for the `content` property.

### 2. The Blog Feed
The main `/blogs` page imports this single data file and maps over it to render a luxury, dark-themed feed inspired by modern minimalist blogs. 

### 3. The Individual Blog Page & SEO
Clicking a blog navigates to `/blogs/:id`. This page reads the URL ID, finds the correct blog in `blogData.js`, and uses `react-markdown` with `@tailwindcss/typography` to render the content perfectly with the `prose` class.

The page automatically updates the `<title>` and `<meta name="description">` to the specific blog's title and excerpt using `react-helmet-async`, giving you the best possible SEO for a React SPA out of the box!
