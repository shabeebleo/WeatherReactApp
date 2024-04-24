// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    {
      // Dynamically import the vite-plugin-legacy plugin
      async config({ command }) {
        if (command === 'serve') {
          const legacy = await import('vite-plugin-legacy');
          return legacy.default({
            targets: ['defaults', 'not IE 11']
          });
        }
      }
    }
  ]
});
