import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next/core-web-vitals";

// `eslint-config-next/core-web-vitals` already bundles typescript-eslint,
// eslint-plugin-react, react-hooks, jsx-a11y and import — don't re-add them.
export default defineConfig([
    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
    next,
    {
        // Must match `next/typescript`'s own patterns — that's the config
        // object that registers the @typescript-eslint plugin namespace.
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
        },
    },
]);
