import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        radial: "radial-gradient(var(--tw-gradient-stops))",
        conic: "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "0% 50%",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "100% 50%",
          },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "gradient-x": "gradient-x 8s ease infinite",
        shine: "shine 1.1s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Small utility plugin(s)
    plugin(({ addUtilities }) => {
      addUtilities({
        // Safari-friendly mask for your header glow
        ".mask-glow": {
          "mask-image":
            "radial-gradient(60% 80% at 20% 0%, black 10%, transparent 60%)",
          "-webkit-mask-image":
            "radial-gradient(60% 80% at 20% 0%, black 10%, transparent 60%)",
        },
        // Optional helper if you want static oversized gradients
        ".bg-size-200": {
          "background-size": "200% 200%",
        },
      });
    }),
  ],
};

export default config;
