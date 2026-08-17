import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0F9F9A",
          secondary: "#F36F56",
          ink: "#172033",
          muted: "#647184",
          paper: "#FBFCF8",
          line: "#DDE7E5"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 32, 51, 0.10)",
        glow: "0 16px 45px rgba(15, 159, 154, 0.22)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
