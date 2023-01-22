import { terser } from "rollup-plugin-terser";
import sass from 'rollup-plugin-sass';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import multi from '@rollup/plugin-multi-entry';

export default {
  input: 'src/components/**/*.ts',
  output: {
    dir: "dist",
    format: "es",
    chunkFileNames: '[name]-[hash].js'
  },
  plugins: [
    typescript(),
     multi({
      entries: ['src/components/my-button', 'src/components/my-header']
    }),
    sass({
      output: true
    }),
    resolve(),
    commonjs(),
    terser()
  ]
};
