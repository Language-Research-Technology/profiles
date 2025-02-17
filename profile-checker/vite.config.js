import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: "9000",
    },
    build: {
        outDir: "../docs",
    },
    plugins: [vue(), viteCommonjs()],
});
