import laravel from 'laravel-vite-plugin'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        plugins: [
            laravel({
                refresh: true,
                input: [
                    'resources/css/site.css',
                    'resources/js/site.js',
                ]
            })
        ],
        server: {
            // respond to all hosts
            host: '0.0.0.0',
            strictPort: true,
            port: 5173,
            hmr: {
                // Force the Vite client to connect via SSL
                // This will also force a "https://" URL in the public/hot file
                protocol: 'wss',
                // The host where the Vite dev server can be accessed
                // This will also force this host to be written to the public/hot file
                host: `${process.env.DDEV_HOSTNAME}`
            }
        }
    }
});
