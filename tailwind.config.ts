import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-bricolage)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        brand: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#ff5a35", // PaperCraft Signature Accent
          600: "#e64a27",
          700: "#c83b1a",
          800: "#a62f13",
          900: "#7c220c",
        },
      },
      boxShadow: {
        paper: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 12px 30px -4px rgba(0, 0, 0, 0.12)",
        sheet: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
