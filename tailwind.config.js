/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'smart-green': {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      }
    },
    backgroundImage: {
      'leaf-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M30 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20zm10-5c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
    }
  },
};
export const plugins = [];