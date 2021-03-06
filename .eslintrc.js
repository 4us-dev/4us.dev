module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "jest"],
  rules: {
    "prettier/prettier": 2,
    "@typescript-eslint/no-explicit-any": "off",
  },
  ignorePatterns: [".next/**", "/public/sw.js", "/public/workbox-*.js"],
}
