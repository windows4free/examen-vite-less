import { defineConfig } from "vite";
import { resolve } from "node:path";
import { glob } from "glob";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import handlebars from "vite-plugin-handlebars";
import { getData } from "./src/data/index.js";

function obtenerEntradas() {
  const files = glob.sync("./**/*.html", {
    ignore: ["./dist/**", "./node_modules/**"],
  });
  
  return Object.fromEntries(
    files.map((file) => {
      const name = file.slice(2, file.lastIndexOf('.'));
      return [name, resolve(process.cwd(), file)];
    })
  );
}

export default defineConfig({
  appType: "mpa",
  base: process.env.DEPLOY_BASE_URL || "/",
  build: {
    minify: true,
    rollupOptions: {
      input: obtenerEntradas(),
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(process.cwd(), "src", "partials"),
      context: (page) => getData(page),
    }),
    ViteMinifyPlugin(),
  ],
});