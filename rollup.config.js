import { terser } from "rollup-plugin-terser";
import sass from 'rollup-plugin-sass';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import { dirname } from 'path';


export default {
  input: {
    'my-button': 'src/components/my-button/my-button.ts',
    'my-header': 'src/components/my-header/my-header.ts'
  },
  output: {
    dir: "dist/",
    format: "es",
    name: 'my-bundle',
    entryFileNames: 'components/[name]/[name]-[hash].js',
    chunkFileNames: 'chunk-[name]-[hash].js'
  },
  plugins: [
    typescript(),
    sass({
      include: 'src/components/*.scss',
      output: true
    }),
    resolve(),
    terser()
  ]
};
