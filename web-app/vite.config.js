import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: "../data",
		emptyOutDir: true,
	},
	plugins: [
		preact(),
		mockDevServerPlugin(),
	],
	define: {},
	server: {
		proxy: {
			'^/toggle': { target: 'http://example.com' },
			'/sequence': { target: 'http://example.com' },
			'/pins': { target: 'http://example.com' },
			'/arm': { target: 'http://example.com' },
		}
	},
});
