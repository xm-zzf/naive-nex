import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      include:["./packages/**/*.ts","./packages/**/*.vue", "./packages/**/*.d.ts", "./packages/**/*.tsx"],
    }),
    Components({
      resolvers: [{
        type: 'component',
        resolve: (name:string) => name.match(/^(NEX[A-Z] | nex-[a-z])/) ? { name, from: '' } : undefined
      }]
    })],
  build: {
    outDir: 'lib',
    rollupOptions:{
      external: ["vue",'naive-ui'],
      output:{
        exports:'named',
        globals: {
          vue: 'Vue',
          'naive-ui': 'naive' 
        }
      }
    },
    
    lib: {
      entry: resolve(__dirname,'packages/index.ts'),
      name:'index',
      fileName:'index',
      formats: ['es','cjs','iife','umd']
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname,'packages'),
      '~': resolve(__dirname,'examples'),
      'naive-nex': resolve(__dirname,'packages')
    }
  },
  server: {
    port: 7777,
    host: true,
  },
  esbuild: {
    
  }
})
