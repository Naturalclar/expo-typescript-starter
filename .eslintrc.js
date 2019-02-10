module.exports = {
  parser: "typescript-eslint-parser",
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["react", "typescript"],
  globals: {
    __DEV__: true
  },
  env: {
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".tsx", ".ts"] }],
    // use custom non-unused-vars for typescript
    "no-unused-vars": "off",
    "typescript/no-unused-vars": ["error"]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"]
      }
    }
  }
};
