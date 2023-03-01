import glob from 'glob';
import path from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const entryPoints = glob.sync('src/components/**/*.ts')
                    .map(file => path.resolve(file))
                    .filter(file => !file.includes('stories'));

entryPoints.push('src/index.ts')

export default defineConfig(({mode}) => {
  return {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'src/components/**/*.css.map',
            dest: '',
            rename: async (fileName, fileExtension, fullPath) => {
              return fullPath.replace('src/', '');
            }
          },
          {
            src: 'dist',
            dest: '../storybook-static',
          }
        ]
      })
    ],
    build: {
      rollupOptions: {
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
        preserveEntrySignatures: 'strict',
      },
    }
  }
})