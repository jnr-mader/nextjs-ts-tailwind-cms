import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        defFontColor: 'var(--def-font-color)',    
        defTabsColor: 'var(--def-tabs-color)',
        defBackgroundColor: 'var(--def-background-color)',
        defLogoBackgroundColor: 'var(--def-logo-background-color)',
        gradColorStart: 'var(--grad-color-start)',
        gradColorEnd: 'var(--grad-color-end)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        "height": "height",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
        },
        rollingGradient : {
          "0%": {backgroundPosition:"0% 2%"},
          "50%": {backgroundPosition:"100% 99%"},
          "100%": {backgroundPosition:"0% 2%"}
        }
      },
      animation: {
        shake: "shake 1s infinite",
        rollingGradient: "rollingGradient 10s infinite",
      },
    }
  },
  plugins: [],
};
export default config;
