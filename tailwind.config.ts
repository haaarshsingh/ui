import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "520px",
      },
      width: {
        content: "640px",
      },
    },
  },
  plugins: [],
};
export default config;
