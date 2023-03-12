// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    srcDir: 'src',
    telemetry: false,
    vite: {
        clearScreen: false,
        envPrefix: ['VITE_', 'TAURI_'],
        build: {
            target: 'es2022',
            // don't minify for debug builds
            minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
            // produce sourcemaps for debug builds
            sourcemap: !!process.env.TAURI_DEBUG,
        },
        server: {
            strictPort: true,
            hmr: {
                protocol: 'ws',
                host: '192.168.50.222', // <- Set this to your current IP
                port: 5183
            }
        }
    }
})
