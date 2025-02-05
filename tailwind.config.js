/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        windows: "url('/windows11.jpg')",
        dieWithSmile: "url('/dieWithSmile.jpeg')",
        weDontTalk: "url('/weDontTalk.webp')",
        chotaSaFasana: "url('/chotaSaFasana.jpg')",
        gulabiSong: "url('/gulabiSong.jpg')",
        badBoy: "url('/badBoy.jpg')",
        yeTereDoNaina: "url('/yeTereDoNaina.jpeg')",
      },
      animation: {
        rotateDisk: "rotateDisk 5s linear infinite",
      },
      keyframes: {
        rotateDisk: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
