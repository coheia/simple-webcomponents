import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';
import esbuild from "rollup-plugin-esbuild";
import styles from "rollup-plugin-styles";
import path from 'path'

const entryPoints = glob.sync('src/components/**/**.ts').map(file => path.resolve(file));
entryPoints.push('src/index.ts')

export default {
  input: entryPoints,
  output: {
    dir: "dist/",
    format: "es",
    entryFileNames: (file) => {
      if(file.name == 'index'){
        return '[name].js'
      }
      
      return 'components/[name]/[name].js'
    },
    chunkFileNames: '[name].js'
  },
  plugins: [
    typescript(),
    esbuild(),
    styles(),
    resolve(),
    terser(),
  ],
  preserveEntrySignatures: 'strict',
};