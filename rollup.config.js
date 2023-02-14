import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';
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

      const splitName = file.name.split('.')
      if(splitName[1] == 'css'){
        return `components/${splitName[0]}/[name].js`
      }
      
      return 'components/[name]/[name].js'
    },
    chunkFileNames: '[name].js'
  },
  plugins: [
    typescript(),
    styles({
      sass: {
        sync: true
      }
    }),
    resolve(),
    terser(),
  ],
  preserveEntrySignatures: 'strict',
};