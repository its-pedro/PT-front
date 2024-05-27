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
        'gray-background': '#EDEDED',
        'blue-header': '#09618e',
        'purple-button': '#2f244d',
      },
    },
  },
  plugins: [],
};
export default config;
