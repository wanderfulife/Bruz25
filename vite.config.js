import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	build: {
		chunkSizeWarningLimit: 1600,
	},
	server: {
		watch: {
			usePolling: true,
		},
		hmr: {
			overlay: false
		}
	}
});
