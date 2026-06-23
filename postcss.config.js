// Local empty PostCSS config.
// This prevents Vite from loading any global/parent PostCSS config,
// which was causing Tailwind v3 to run with Tailwind v4.
export default {
  plugins: {},
};
