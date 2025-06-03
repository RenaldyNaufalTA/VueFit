/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "3px 3px 0px 0px #000",
        active: "1px 1px 0px 0px  rgb(156 ,163, 175, 1)",
        card: "10px 10px 0px 0px rgb(156 ,163, 175, 1)",
        minicard: "7px 7px 0px 0px #112",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      borderColor: {
        DEFAULT: "#000",
        "light-gray": "rgb(156 ,163, 175, 1)",
      },
      ringColor: {
        DEFAULT: "#000",
        primary: "#2d2d2d",
      },
      backgroundColor: {
        primary: "#2d2d2d",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
