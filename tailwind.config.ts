import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      mediumbold: "800",
      extrabold: "900",
    },
    extend: {
      colors: {
        dark: {
          D100: "#161722",
          D200: "#181818",
          D900: "#000000",
        },
        gray: {
          G00: "#FDF3F0",
          G010: "F3F2EF",
          G020: "#EEF3F8",
          G050: "#DBDCDD",
          G100: "#989898",
          G200: "#666666",
          G300: "#7A7A7A",
          G400: "#606163",
          G500: "#535353",
          G600: "#6A6A6A",
          G700: "#949494",
          G800: "#B2B2B2",
          G900: "#E0DFDC",
          G1000: "#EBEBEB",
          G1100: "#5F6163",
          G1200: "#BFBEBB",
          G1300: "#C4C4C4",
          G1400: "#E7A33E",
        },
        white: {
          w100: "#FFFFFF",
        },
        blue: {
          B050: "#CCDEF5",
          B100: "#0A66C2",
          B200: "#378FE9",
          B300: "#4E8ADD",
          B400: "#2F43B8",
        },
        red: {
          R100: "#CC1016",
        },
        green: {
          G100: "#5F9B41",
        },
        mustard: {
          M100: "#915907",
          M200: "#E16745",
          M300: "#C37D16",
          M400: "#D17655",
        },
        otherS: {
          O100: "#8C7668",
        },
      },
    },
  },
  plugins: [],
};
export default config;
