import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import svelteConfig from "./svelte.config.js";

export default defineConfig(
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "dist-ssr/**",
      "coverage/**",
      "public/**",
    ],
  },
  js.configs.recommended,
  svelte.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  {
    files: ["src/**/*.js", "src/**/*.svelte"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["*.config.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: { svelteConfig },
    },
  },
  svelte.configs.prettier,
  prettier,
);
