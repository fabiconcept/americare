import type { Config } from "tailwindcss";
import {nextui} from '@nextui-org/theme';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ...[
      "./node_modules/@nextui-org/theme/dist/components/autocomplete.js",
      "./node_modules/@nextui-org/theme/dist/components/button.js",
      "./node_modules/@nextui-org/theme/dist/components/ripple.js",
      "./node_modules/@nextui-org/theme/dist/components/spinner.js",
      "./node_modules/@nextui-org/theme/dist/components/input.js",
      "./node_modules/@nextui-org/theme/dist/components/listbox.js",
      "./node_modules/@nextui-org/theme/dist/components/divider.js",
      "./node_modules/@nextui-org/theme/dist/components/popover.js",
      "./node_modules/@nextui-org/theme/dist/components/scroll-shadow.js",
    ],
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#6fad45",
        secondary: "#359BA7",
        darkBg: "#040D12",
      }
    },
  },
  plugins: [nextui()],
};
export default config;
