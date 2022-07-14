import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    publicDir: "public",
    define: {},
    resolve: {
      alias: {
        src: path.resolve("src/"),
      },
    },
  };
});
