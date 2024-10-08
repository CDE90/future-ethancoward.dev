import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-gosha-sans)", ...fontFamily.sans],
        mono: ["var(--font-ibm-plex-mono)", ...fontFamily.mono],
      },
      gridTemplateColumns: {
        "auto-auto": "auto auto",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
} satisfies Config;
