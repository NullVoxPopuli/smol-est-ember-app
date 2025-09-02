import { defineConfig } from 'vite';
import { extensions, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  build: {
    sourcemap: true,
    // rollupOptions: {
    //   output: {
    //     manualChunks: (id) => {
    //       if (id.includes('ember-source')) {
    //         let parts = id.split('/packages/');
    //         return parts[1];
    //       }
    //     },
    //   },
    // },
  },
  optimizeDeps: {
    exclude: ['ember-source'],
  },
  plugins: [
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
});
