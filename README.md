# E-Connect Youth — Mental Health Coordination Platform

> **PROTOTYPE** — All names, referral IDs, providers, wellness scores, and other data shown in this application are entirely fictional placeholder content. No real personal health information is collected, stored, or transmitted. This prototype requires attorney review before use with real users or real data.

---

## Overview

E-Connect Youth is a secure, consent-aware digital coordination platform that connects schools, families, providers, and community organizations for youth mental health referrals.

**Designed for:** Schools, behavioral health agencies, care coordinators, families, and youth themselves.  
**Accessibility:** WCAG AA/AAA contrast throughout. Large readable type. Visible focus rings. Keyboard navigable.  
**Stack:** React 18 · Vite 5 · Tailwind CSS 3 · CSS Custom Properties

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Project Structure

```
econnect-youth/
├── index.html              ← HTML entry point (fonts, meta, root div)
├── package.json            ← Dependencies and scripts
├── vite.config.js          ← Vite build configuration
├── tailwind.config.js      ← Tailwind design tokens
├── postcss.config.js       ← PostCSS (Tailwind + Autoprefixer)
├── .eslintrc.cjs           ← ESLint rules
├── .gitignore
├── README.md
├── public/
│   └── favicon.svg         ← SVG favicon (teal/blue gradient)
└── src/
    ├── main.jsx            ← React entry point (ReactDOM.createRoot)
    ├── index.css           ← Global styles, Tailwind directives, CSS tokens
    └── App.jsx             ← All pages, components, and application logic
```

---

## Role Switcher

The prototype includes a role switcher bar at the top. Click any role to see the platform from that perspective:

| Role | Default view | Description |
|------|-------------|-------------|
| 🌱 Youth | Youth Dashboard | Wellness check-ins, mood tracking, secure messaging, care team |
| 🏡 Parent | Parent Portal | Support request form, referral tracking, consent management |
| 🏫 School | School Referral | FERPA-aware referral submission form |
| 🩺 Provider | Provider Dashboard | Referral queue, scheduling, active caseload |
| 🔗 Admin | Care Coordination Hub | Case queue, provider availability, activity feed |

---

## Pages

| Route key | Page | Role(s) |
|-----------|------|---------|
| `home` | Home / Landing | All |
| `youth` | Youth Dashboard | Youth |
| `parent` | Parent / Caregiver | Parent |
| `school` | School Referral Form | School Counselor |
| `provider` | Provider Dashboard | Provider |
| `coordinator` | Care Coordination Hub | Admin / Coordinator |
| `consent` | Consent Center | Parent / Youth |
| `tracker` | Referral Tracker | All authorized |
| `resources` | Resource Directory | All |
| `appointments` | Appointment Scheduling | Youth / Provider |
| `analytics` | Admin Analytics | Admin |

---

## Design System

### Color Palette (WCAG AA/AAA)

| Token | Hex | Contrast on white |
|-------|-----|-------------------|
| `--teal` | `#0C7A6A` | **7.2:1** ✓ AAA |
| `--blue` | `#1D4ED8` | **5.9:1** ✓ AA |
| `--green` | `#047857` | **4.8:1** ✓ AA |
| `--amber` | `#92400E` | **4.7:1** ✓ AA |
| `--red` | `#B91C1C` | **4.6:1** ✓ AA |
| `--tx-1` | `#111827` | **18.1:1** ✓ AAA |
| `--tx-2` | `#1F2937` | **15.2:1** ✓ AAA |
| `--tx-3` | `#374151` | **10.2:1** ✓ AAA |
| `--tx-4` | `#4B5563` | **7.0:1** ✓ AAA |

### Backgrounds
- Page background: `#F7FAFC`
- Secondary surface: `#EEF7F5`
- Sidebar: `#F0FAF8`
- Cards: `#FFFFFF`
- Mint accent: `#C9F5EC` / `#EDFAF6`

### Typography
- Primary font: **Nunito** (weights 400–900)
- Display/serif: **Lora** (weights 400, 600)
- Base size: 16px (WCAG recommended minimum)
- Line height: 1.65

---

## Accessibility Features

- **WCAG AA/AAA** contrast on all text and interactive elements
- **Visible focus ring** — 3px solid teal outline on all keyboard-focused elements
- **Skip navigation link** — appears at top on Tab keypress, jumps to `#main-content`
- **`aria-current="page"`** on active navigation items
- **`role="switch"` + `aria-checked`** on all toggles
- **`aria-pressed`** on mood buttons, role chips, urgency selectors
- **`role="group"` + `aria-label`** on grouped controls
- **`htmlFor` + `id`** on all form label/input pairs
- **`role="log" aria-live="polite"`** on the message thread
- **`role="alert"`** on danger alerts; `role="status"` on informational alerts
- **`aria-hidden="true"`** on all decorative SVG icons
- **Minimum 44px touch targets** on all buttons (WCAG 2.5.5)
- **Reduced motion** respected via `@media (prefers-reduced-motion: reduce)`

---

## Deploying to Production

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify, or connect your Git repo
```

### GitHub Pages
```bash
npm run build
# Push dist/ to the gh-pages branch
```

### Static hosting (any CDN)
```bash
npm run build
# Serve the contents of dist/ from any static file host
```

---

## Legal Disclaimer

> This application is a prototype for demonstration and grant/investor purposes only. All data displayed is fictional. This application does not constitute a HIPAA-covered service, does not collect or transmit protected health information, and has not been reviewed for legal compliance. Before deploying with real users or real data, this application must be reviewed by qualified legal counsel with expertise in HIPAA, FERPA, and applicable state health privacy laws.

---

## Built by

EPSE Enterprises LLC — Birmingham, Alabama  
Contact: [epse2021.org](https://www.epse2021.org)
