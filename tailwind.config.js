module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ff4400",
          secondary: "#FFC000",
          accent: "#FFEDD5",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#D9F99D",
          secondary: "#FDE68A",
          accent: "#4B5563",
          neutral: "#F3F4F6",
          "base-200": "#1F2937",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
