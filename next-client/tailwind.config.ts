import type { Config } from "tailwindcss";

// Define the configuration object
const config: Config = {
  // Specify the paths to the files that contain Tailwind CSS classes
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Customize the theme by extending Tailwind CSS default theme
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  // Specify any additional plugins to use (if any)
  plugins: [],
};

// Export the configuration object
export default config;
