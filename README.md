# AK Pharma — Official Corporate Website & Product Catalog

> **Smart Solutions for Healthier Living**  
> Official corporate website and interactive product catalog for **AK Pharma**, Dhaka, Bangladesh.

---

## 📌 Table of Contents
1. [Overview](#-overview)
2. [Brand Identity & Design System](#-brand-identity--design-system)
3. [Directory & File Structure](#-directory--file-structure)
4. [Architecture & Technical Principles](#-architecture--technical-principles)
5. [How to Add or Edit Products](#-how-to-add-or-edit-products)
6. [Interactive Components](#-interactive-components)
7. [Contact & Company Details](#-contact--company-details)
8. [Local Preview & Deployment](#-local-preview--deployment)

---

## 🌟 Overview

AK Pharma is a premier pharmaceutical and healthcare provider based in Dhaka, Bangladesh, dedicated to delivering certified, high-grade therapeutic and wellness solutions.

This codebase delivers a modern, high-performance, glassmorphic corporate website featuring:
- Instant dual-environment support (works straight from local disk via `file:///` and on production web servers like Vercel, Netlify, or Apache/Nginx).
- Interactive dynamic product catalog with real-time category filtering and search.
- Dedicated rich product detail pages (`product-detail.html?id=...`).
- Pre-rendered, responsive header with animated mobile hamburger drawer.
- Pre-rendered footer with quick links, legal disclaimers, and company credentials.
- Floating WhatsApp & Phone contact pill for direct client inquiries.
- Animated numerical counters for key operational metrics.
- Interactive FAQ accordion for doctor, clinic, and patient questions.

---

## 🎨 Brand Identity & Design System

The brand identity was recreated from the official AK Pharma vector specifications.

### Color Palette
| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Brand Primary (Deep Blue)** | `#274e6e` | Monogram leaf/droplet, primary headers, button gradients, dark navbar states |
| **Brand Accent (Sky Blue)** | `#3d789e` | Monogram arc, badges, interactive hover highlights, active tab states |
| **Brand Dark Text** | `#1a3045` | Main body typography and headings |
| **Surface Off-White** | `#f8fafc` | Section backgrounds and card fills |
| **Border Soft** | `rgba(39, 78, 110, 0.12)` | Subtle glassmorphic borders |

### Typography
- **Headings & Monogram**: System UI, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif (inspired by Neue June Bold specifications).
- **Tagline**: *"Smart Solutions for Healthier Living"* (italicized / tracked cleanly beneath the logo mark).

### Logo & Favicon Assets (`/images`)
- `ak-pharma-logo.svg` — Primary horizontal vector logo with dark text (for white backgrounds).
- `ak-pharma-logo-horizontal.svg` — Ultra-crisp horizontal lockup for navbar and letterheads.
- `logo-white.svg` / `logo-white-horizontal.svg` — Inverted white logo for dark footers and modals.
- `ak-icon.svg` — Standalone AK monogram symbol (intertwined A & K with health leaf).
- `favicon.ico` — Multi-resolution favicon placed at root and `/images/favicon.ico`.
- `favicon.svg` & `favicon-dark.svg` — Modern scalable vector favicons for browser tabs.
- `apple-touch-icon.png` — High-resolution touch icon for iOS and mobile bookmarks.

---

## 📂 Directory & File Structure

```
akpharma website/
├── images/                        # Branding logos, vector icons, favicons, team graphics
│   ├── ak-pharma-logo.svg         # Primary logo (dark text)
│   ├── ak-pharma-logo-horizontal.svg
│   ├── logo-white.svg             # Primary logo (white text for dark footer)
│   ├── ak-icon.svg                # Vector icon / mark
│   ├── favicon.ico / favicon.svg  # Browser favicons
│   └── ...                        # Product photography & category banners
├── products/                      # Product images (AVIF, WEBP, PNG)
│   ├── ova-wom.avif
│   ├── fol-aid.avif
│   └── ...
├── index.html                     # Homepage (Hero, metrics, highlights, FAQ, contact CTA)
├── about.html                     # Corporate overview, mission, leadership, quality standards
├── products.html                  # Filterable product catalog grid
├── product-detail.html            # Deep-dive product specification & composition page
├── careers.html                   # Career opportunities, corporate culture, application form
├── contact.html                   # Contact form, office location, interactive inquiry channels
├── header.html                    # Reference modular header component
├── footer.html                    # Reference modular footer component
├── style.css                      # Master design system and global stylesheet
├── products.css                   # Catalog and product detail specific styles
├── script.js                      # Core interactive scripts (navigation, countup, FAQ, widgets)
├── products-data.js               # Offline & online product database (window.AK_PRODUCTS)
├── products.json                  # JSON-formatted product database for API/backend consumption
├── README.md                      # This comprehensive documentation file
└── vercel.json                    # Optional routing configuration for Vercel deployment
```

---

## 🏗 Architecture & Technical Principles

### 1. Dual-Compatibility: Local `file://` & Production Web Servers
Modern browsers enforce strict CORS policies that block `fetch('header.html')` and `fetch('products.json')` when a user double-clicks an HTML file directly from Windows Explorer (`file:///...`).
To make sure the website **works flawlessly out of the box** in every environment:
- **Header & Footer**: Pre-rendered directly inside every `.html` page with identical markup. The JavaScript `loadHeader()` and `loadFooter()` checks if elements exist and will only fetch if the placeholder is completely empty (e.g. if served through a custom CMS).
- **Product Data**: Stored in `products-data.js` as `window.AK_PRODUCTS = [...]`. Both `products.html` and `product-detail.html` load `products-data.js` via a regular `<script>` tag before falling back to `products.json`. Thus, search, filtering, and dynamic product detail viewing work **offline without requiring a local web server**.

### 2. Standardized Mobile Navigation
The mobile menu uses the `.open` class on `#siteNav` and `.is-active` on `#menuToggle`. Clicking outside the drawer or pressing `Escape` automatically dismisses the navigation panel.

---

## 📦 How to Add or Edit Products

Product information is maintained in **two synchronous files**:
1. `products-data.js` — **Primary** (used for local offline preview and web catalog).
2. `products.json` — **Secondary** (used for server APIs or headless deployments).

### Step-by-Step Instructions:
1. Open `products-data.js`.
2. Locate the `window.AK_PRODUCTS = [` array.
3. Copy the template object below, fill in your new product details, and paste it into the array.
4. (Optional but recommended) Paste the exact same object into `products.json`.
5. Place your product pack image in the `products/` folder (e.g., `products/my-new-drug.png`).

### Product Object Template
```javascript
{
  "id": "unique-product-slug",              // URL safe id: e.g. "cal-d-max" -> /product-detail.html?id=cal-d-max
  "name": "Product Brand Name",            // e.g. "Cal-D Max"
  "generic": "Generic Name / Active Drug", // e.g. "Calcium Carbonate + Vitamin D3"
  "category": "vitamins",                  // Category: "maternal" | "wellness" | "vitamins" | "rx"
  "therapeuticClass": "Mineral & Vitamin", // e.g. "Bone Health & Osteoporosis"
  "form": "Film-Coated Tablet",            // Tablet, Capsule, Syrup, Softgel, Injection
  "packSize": "30 Tablets / Box",          // Pack size
  "rx": false,                             // true = Prescription Required, false = OTC
  "img": "products/cal-d-max.avif",        // Path to image inside products/ folder
  "images": [],                            // Optional additional gallery images
  "strength": "500 mg + 200 IU",           // Dosage strength
  "manufacturer": "AK Pharma Ltd.",        // Manufacturer name
  "origin": "Bangladesh",                  // Country of origin
  "storage": "Below 25°C · Dry Place",     // Storage condition summary
  "shelfLife": "24 months",                // Shelf life
  "dgdaReg": "DA-Reg-XXXX-XXXX",           // DGDA registration number
  "description": "Comprehensive description of what the product does and who it is for.",
  "indications": [
    "First clinical indication",
    "Second clinical indication",
    "Third clinical indication"
  ],
  "dosage": "1 tablet daily after food or as directed by a registered physician.",
  "composition": [
    ["Ingredient 1", "500 mg"],
    ["Ingredient 2", "200 IU"]
  ],
  "contraindications": "Known hypersensitivity to any ingredient.",
  "sideEffects": "Generally well tolerated. Rare mild gastrointestinal discomfort.",
  "interactions": "Consult physician if taking concurrent prescription medications.",
  "warnings": "Do not exceed the recommended daily dosage.",
  "storage_full": "Store in a cool, dry place below 25°C. Protect from direct sunlight and moisture. Keep out of reach of children."
}
```

---

## ⚡ Interactive Components

### 1. Floating WhatsApp & Quick Contact Pill
- Always accessible in the bottom-right corner across all pages.
- Allows direct messaging to the official AK Pharma representative:
  - Phone: `+880 1798-112763` (`01798112763`)
  - WhatsApp Link: `https://wa.me/8801798112763?text=Hello%20AK%20Pharma...`

### 2. Animated Metric Counters
- Metric numbers on `index.html` (e.g. 10+ Years, 40+ Formulations, 3,000+ Doctor Network) smoothly animate upwards using an `IntersectionObserver` when scrolled into view.

### 3. Interactive FAQ Accordion
- Expandable accordions for patient and healthcare professional inquiries.
- Includes questions on DGDA certifications, supply chain, doctor sample requests, and distribution across Bangladesh's 8 divisions.

---



---

## 🔍 SEO & Content Architecture

### 1. Brand Narrative: Direct Health & Wellness Companion
AK Pharma operates on a specialized pharmaceutical marketing and distribution model:
- **Bulk Curation**: Sourcing clinically validated formulations from top international and certified manufacturers.
- **Physician Partnership**: Marketing directly to doctors and specialists (3,000+ physicians) who prescribe with complete confidence.
- **Multi-Channel Availability**: Supplying retail and model pharmacies across all 8 administrative divisions of Bangladesh, while welcoming direct patient consultations and orders.
- **Copywriting Voice**: Emphasizes warmth, reassurance, and everyday vitality for families, prenatal mothers, and couples, anchored by strict DGDA compliance.

### 2. Search Engine Optimization (SEO) Suite
- **Page-Specific Meta Tags**: Optimized Title tags, Meta Descriptions, and Keywords across every page, incorporating high-intent local Bangladesh queries (`Ova-Wom Bangladesh`, `Fol-Aid price BD`, `prenatal vitamins Dhaka`, `fertility supplements BD`, `ওভা ওম`).
- **OpenGraph & Twitter Cards**: Complete social sharing preview cards on all pages for WhatsApp, Facebook, LinkedIn, and Twitter.
- **Schema.org JSON-LD Structured Data**:
  - `MedicalBusiness` / `Pharmacy` / `Organization` on Homepage and Contact page.
  - `CollectionPage` on the Product Catalog.
  - `AboutPage` on the About Us page.
  - Dynamic `Product` / `DietarySupplement` Schema.org automatically injected on `product-detail.html`.
- **Search Engine Files**:
  - `sitemap.xml`: XML sitemap indexing all static pages and individual dynamic product URLs.
  - `robots.txt`: Search crawler instructions pointing directly to the sitemap.

### 3. Dual-Action Product Flow
Every product page provides immediate, dedicated actions for both key audiences:
- **For Patients**:
  - **"Order via WhatsApp / Hotline"**: Pre-fills the exact product name into WhatsApp for one-click ordering.
  - **"Find at Partner Pharmacies"**: Connects patients to the nearest authorized stockist.
  - **"Inquire for Best Price & Stock"**: Ensures flexible, accurate pricing without static catalog discrepancies.
- **For Physicians**:
  - **"Request Doctor Sample & Clinical Monograph"**: Directly routes to the medical representative desk with the specific drug name pre-filled.

## 📞 Contact & Company Details

- **Company Name**: AK Pharma
- **Tagline**: Smart Solutions for Healthier Living
- **Head Office**: 10/26, Rupnagar R/A, Mirpur, Dhaka 1216, Bangladesh
- **Phone / WhatsApp**: `+880 1798-112763` / `01798112763`
- **Email**: `akpharmabd@gmail.com`
- **Hours**: Saturday – Thursday: 9:00 AM – 6:00 PM

---

## 🚀 Local Preview & Deployment

### Quick Local Preview
Simply double-click `index.html` in your file explorer. It will open in Google Chrome, Microsoft Edge, or Firefox with all features functioning.

### Serving with Local Web Server (Node.js / Python)
If you prefer a local HTTP server:
```powershell
# Using Python
python -m http.server 8080

# Using Node.js (npx serve)
npx serve .
```
Then navigate to `http://localhost:8080` in your web browser.

### Deploying to Production (Vercel / Netlify / GitHub Pages)
This project is pure static HTML/CSS/JS with zero build dependencies.
- **Vercel**: Push to GitHub and import repository into Vercel; it deploys automatically.
- **Netlify**: Drag and drop the folder into Netlify Drop.
- **cPanel / Apache / Nginx**: Upload all files to `public_html`.
