import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
    {
        rules: {
            "@typescript-eslint/ban-ts-comment": "error"
        }
    },
    {
        ignores: ["build", "dist"]
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
    },
    {
        languageOptions: {
            globals: globals.browser
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier
];
