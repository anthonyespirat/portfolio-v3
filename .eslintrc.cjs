module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    // ...
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "quotes": ["error", "double"],
    "semi": "off",
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "prefer-const": ["error", {
      "destructuring": "all",
      "ignoreReadBeforeAssign": false
    }],
    "brace-style": "off",
    "@typescript-eslint/brace-style": "error",
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error", { before: false, after: true }],
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ["error", { before: true, after: true }],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always", { "arraysInObjects": false }],
    "@typescript-eslint/type-annotation-spacing": ["error", { "before": false, "after": false, overrides: { colon: { before: false, after: true } } }],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1 }]
  }
};

