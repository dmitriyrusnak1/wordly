import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          "10": "#f5f9ff",
          "20": "#ebf3ff",
          "40": "#2c80ff",
          "60": "#065fd4",
        },
        green: {
          "10": "#f0fdf8",
          "20": "#dff7ed",
          "60": "#0b835f",
          "80": "#004732",
        },
        yellow: {
          "20": "#ffecd5",
          "60": "#ffc683",
          "truth-light": "#fcfaec",
          truth: "#e0c83d",
        },
        red: {
          "20": "#f8d9dd",
          "60": "#b8182c",
          "80": "#7f0615",
          "urgency-light": "#fee8e8",
          urgency: "#f71414",
          "urgency-dark": "#ad0e0e",
        },
        black: "#000000",
        gray: {
          "90": "#4d4d4d",
          "80": "#808080",
          "75": "#949494",
          "70": "#b3b3b3",
          "60": "#c4c4c4",
          "50": "#d6d6d6",
          "40": "#e0e0e0",
          "30": "#ededed",
          "20": "#f3f3f3",
          "10": "#f9f9f9",
          "05": "#fcfcfc",
          onward: "#f7f6f5",
          "onward-56": "#fbfaf9",
        },
        white: "#ffffff",
        text: {
          "standard-black": "rgba(0, 0, 0, 0.72)",
          "subtle-black": "rgba(0, 0, 0, 0.54)",
        },
        chart: {
          "01-purple": "#80056c",
          "02-blue": "#0079e8",
          "03-red": "#da5e59",
          "04-green": "#069e9e",
          "05-blue": "#122748",
          "06-green": "#008950",
          "07-pink": "#d8157e",
          "08-blue": "#4783c8",
          "09-purple": "#5d33c1",
          "10-orange": "#a55900",
          "11-green": "#01563d",
          "12-pink": "#ca53b0",
          "13-red": "#4a100b",
          "14-blue": "#004ca3",
          "15-red": "#a20600",
          "16-purple": "#9c00e5",
          "17-gray": "#717171",
          "18-green": "#598b07",
          "19-blue": "#002c81",
          "20-red": "#7e001e",
          "21-green": "#18a572",
          "22-purple": "#510077",
          "23-gray": "#6e92a6",
          "24-pink": "#b10055",
          "25-blue": "#218398",
        },
      },
      spacing: {
        "0_0": "0px",
        "0_5": "0.125rem", // 2px
        "1_0": "0.25rem", // 4px
        "1_5": "0.375rem", // 6px
        "2_0": "0.5rem", // 8px
        "2_5": "0.625rem", // 10px
        "3_0": "0.75rem", // 12px
        "3_5": "0.875rem", // 14px
        "4_0": "1rem", // 16px
        "5_0": "1.25rem", // 20px
        "6_0": "1.5rem", // 24px
        "7_0": "1.75rem", // 28px
        "8_0": "2rem", // 32px
        "9_0": "2.5rem", // 40px',
      },
      fontSize: {
        "5xl": "2.5rem", // 40px
        "4xl": "1.875rem", // 30px
        "3xl": "1.5rem", // 24px
        "2xl": "1.25rem", // 20px
        xl: "1.125rem", // 18px
        lg: "1rem", // 16px
        base: "0.875rem", // 14px
        small: "0.75rem", // 12px
        xsmall: "0.625rem", // 10px',
      },
      lineHeight: {
        normal: "1.5",
        snug: "1.35",
        tight: "1.2",
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
