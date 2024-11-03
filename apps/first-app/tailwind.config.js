const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/**@type {import('tailwindcss').Config}*/
module.exports = {
  presets: [require('@acorex/styles/tailwind-base')],
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), createGlobPatternsForDependencies(__dirname)],
  theme: {},
  plugins: [],
}; 