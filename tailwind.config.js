module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#242c32",
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
      
    ],
  },
  plugins: [require("daisyui")],
}
