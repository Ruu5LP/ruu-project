import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        host: "localhost", // または "0.0.0.0"
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            buildDirectory: "public/build",
            refresh: true,
        }),
        react(),
    ],
    esbuild: {
        jsx: "automatic",
    },
});
