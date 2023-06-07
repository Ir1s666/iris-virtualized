import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

const pkgName = pkg.name;

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.tsx',
      name: '',
      fileName: pkgName,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    },
    watch: {
      clearScreen: true,
      include: 'lib/*'
    },
  },
  plugins: [dts()]
})
