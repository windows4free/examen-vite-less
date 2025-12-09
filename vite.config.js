import { defineConfig } from "vite";
import path, { resolve } from "node:path";
import * as glob from "glob";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import handlebars from "vite-plugin-handlebars";
import { getData } from "./src/data/index.js";

function obtenerEntradas() {
  return Object.fromEntries(
    glob
      .sync("./**/*.html", {
        ignore: ["./dist/**", "./node_modules/**"],
      })
      .map((file) => {
        return [
          file.slice(2, file.length - path.extname(file).length),
          resolve(process.cwd(), file),
        ];
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