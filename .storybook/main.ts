import tailwindcss from '@tailwindcss/vite'
import * as path from 'node:path'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default {
  core: {
    builder: '@storybook/builder-vite'
  },
  docs: {},
  framework: '@storybook/react-vite',
  stories: [
    '../registry/**/*.mdx',
    '../registry/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  _viteFinal: async (config: any) => {
    return mergeConfig(config, {
      resolve: { ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@components": path.resolve(__dirname, './src/components'),
          "@shadcn": path.resolve(__dirname, './src/registry'),
          "@hooks": path.resolve(__dirname, './src/hooks'),
          "@styles": path.resolve(__dirname, './src/styles'),
          "@utils": path.resolve(__dirname, './src/utils'),
          "@registry": path.resolve(__dirname, './src/registry'),
          "@lib": path.resolve(__dirname, './src/lib'),
          "@types": path.resolve(__dirname, './src/types')
      }
    },
      input: './src/index.ts',
      build: {
        target: 'es2015',
        dir: 'dist',
        lib: [
          {
            fileName: 'index.cjs',
            format: 'cjs',
            sourcemap: true,
            name: '@paradigm-ui/ui'
          }, {
            fileName: 'index.mjs',
            format: 'mjs',
            sourceMap: true,
            name: '@paradigm-ui/ui'
          }, {
            fileName: 'index.',
            format: 'mjs',
            sourceMap: true,
            name: '@paradigm-ui/ui'
          }
        ]
      },
      plugins: [
        tailwindcss(),
        tsconfigPaths()
      ],
      typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
          propFilter: (prop: any) => prop.parent ? /node_modules/.test(prop.parent.fileName) : true,
          shouldExtractLiteralValuesFromEnum: true
        }
      }
    })
  }
}