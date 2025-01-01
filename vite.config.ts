import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		cssCodeSplit: false,
		lib: {
			entry: "./src/lib/index.ts",
			name: "Waddle",
			fileName: (format) => `waddle.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	optimizeDeps: {
		include: ["@ducklabs/waddle"],
		force: true,
	},
	plugins: [react()],
});
