/** @type {import('vite').UserConfig} */
// plugins
import mpa from 'vite-plugin-mpa';

export default {
  plugins: [mpa(
    {
      scanDir: 'dist/**/*'
    }
  )],
};
