/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/frontend/**/*.{js,ts,jsx,tsx,vue,svelte}",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    extend: {},
  },
  plugins: [forms, typography, containerQueries],
};
