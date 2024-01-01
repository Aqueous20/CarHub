/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  screens: {
    sm: "648px",
    md: "768px",
    lg: "1024px",
    xl: "1300px",
  },
  extend: {
    colors: {
      primary: "#101828",
      secondary: "#667085",
      accent: {
        DEFAULT: "#ed1d24",
        hover: "#dd242a",
      },
      body: "#ff0000",
    },
  },
};
export const plugins = [];
