import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import styles from "rollup-plugin-styles";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: {
    'my-button': 'src/components/my-button/my-button.ts',
    'my-header': 'src/components/my-header/my-header.ts'
  },
  output: {
    dir: "dist/",
    format: "es",
    entryFileNames: 'components/[name]/[name].js',
    chunkFileNames: '[name].js'
  },
  plugins: [
    typescript(),
    esbuild(),
    styles(),
    resolve(),
    terser()
  ]
};
