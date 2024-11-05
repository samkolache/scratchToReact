import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#264DE4",
        brandOrange: "#E34C26",
        brandLightBlue: "#53C1DE",
        brandYellow: "#F7DF1E"
      },
    },
  },
  plugins: [],
};
export default config;
