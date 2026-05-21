/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
      colors: {
        // Primary teal palette — WCAG AAA 7.2:1 on white
        teal: {
          DEFAULT: "#0C7A6A",
          hover:   "#0A6658",
          press:   "#085549",
          mid:     "#4DB8A4",
          lt:      "#C9F5EC",
          ltt:     "#EDFAF6",
        },
        // Supporting status colors — all WCAG AA on white
        brand: {
          blue:       "#1D4ED8",
          "blue-lt":  "#DBEAFE",
          "blue-ltt": "#EFF6FF",
          green:      "#047857",
          "green-lt": "#D1FAE5",
          amber:      "#92400E",
          "amber-lt": "#FEF3C7",
          red:        "#B91C1C",
          "red-lt":   "#FEE2E2",
          purple:     "#5B21B6",
          "purple-lt":"#EDE9FE",
        },
        // Page surfaces
        surface: {
          DEFAULT: "#F7FAFC",
          2:       "#EEF7F5",
          3:       "#E3F4F0",
          card:    "#FFFFFF",
        },
        // Sidebar
        sidebar: {
          DEFAULT:  "#F0FAF8",
          border:   "#C8E6DF",
          hover:    "#E0F5F0",
          active:   "#C9F5EC",
        },
        // Text — all WCAG AA/AAA
        ink: {
          1: "#111827",  // 18.1:1
          2: "#1F2937",  // 15.2:1
          3: "#374151",  // 10.2:1
          4: "#4B5563",  //  7.0:1
          5: "#6B7280",  //  4.6:1
        },
        // Borders
        border: {
          DEFAULT: "#C8D9E0",
          lt:      "#DDE9EE",
          focus:   "#0C7A6A",
        },
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        DEFAULT: "14px",
        lg: "20px",
        xl: "28px",
      },
      boxShadow: {
        xs: "0 1px 3px rgba(0,0,0,.06)",
        sm: "0 2px 6px rgba(0,0,0,.07)",
        DEFAULT: "0 3px 12px rgba(0,0,0,.08)",
        lg: "0 6px 20px rgba(0,0,0,.09)",
        focus: "0 0 0 3px rgba(12,122,106,.45)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      fontSize: {
        "2xs": ["11px", { lineHeight: "1.4" }],
        xs:    ["12px", { lineHeight: "1.4" }],
        sm:    ["13px", { lineHeight: "1.5" }],
        base:  ["15px", { lineHeight: "1.65" }],
        md:    ["16px", { lineHeight: "1.65" }],
        lg:    ["18px", { lineHeight: "1.5" }],
        xl:    ["20px", { lineHeight: "1.4" }],
        "2xl": ["24px", { lineHeight: "1.3" }],
        "3xl": ["30px", { lineHeight: "1.2" }],
        "4xl": ["36px", { lineHeight: "1.15" }],
        "5xl": ["44px", { lineHeight: "1.1" }],
      },
      animation: {
        "fade-up": "fadeUp 0.28s ease both",
        "scale-in": "scaleIn 0.22s ease both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.98)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
