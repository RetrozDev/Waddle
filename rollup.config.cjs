const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const alias = require("@rollup/plugin-alias");
const path = require("node:path");
const packageJson = require("./package.json");

module.exports = {
	input: "src/lib/index.ts",
	output: [
		{
			file: packageJson.main,
			format: "cjs",
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: "esm",
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve({
			extensions: [".ts", ".tsx", ".js", ".jsx"],
		}),
		commonjs(),
		postcss({
			modules: true,
			inject: true,
			extract: false,
			minimize: true,
			plugins: [
				require("postcss-import")(),
				require("postcss-preset-env")({ stage: 3 }),
				require("autoprefixer"),
			],
		}),
		typescript({
			useTsconfigDeclarationDir: true,
			tsconfigOverride: {
				compilerOptions: {
					moduleResolution: "node",
					declaration: true,
					declarationDir: "dist",
					outDir: "dist",
					noEmit: false,
					isolatedModules: true,
					jsx: "react-jsx",
				},
				include: ["src/lib/**/*"],
				exclude: ["node_modules", "dist", "**/*.stories.tsx", "**/*.test.tsx"],
			},
		}),
		alias({
			entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
		}),
	],
	external: ["react", "react-dom"],
};
