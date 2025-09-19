import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    ignores: ["dist"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // Provide the actual parser object required by ESLint's flat config
      parser: tsParser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Keep TypeScript-specific rules off to avoid plugin/runtime mismatches in this environment.
      "@typescript-eslint/no-unused-vars": "off",
      // Turn off core rules that conflict with TypeScript analysis to avoid many false positives.
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
];
