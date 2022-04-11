module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
    "./components/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wood': "url('/src/img/wood_background.jpg')",
        '1': "url('/src/img/IMG_1212.jpg')",
        'wood-dark': "url('/src/img/wood_dark.jpg')",
        'intro': "url('/src/img/hardwood_stain_river_logo.jpg')",
        'construction': "url('/src/img/in_construction.jpg')",
        'construction2': "url('/src/img/contact_background_in_progress.jpg')"
       })
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
