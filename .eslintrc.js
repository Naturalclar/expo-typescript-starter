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
    "typescript/no-unused-vars": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.tsx"]
      }
    ],
    "import/no-unresolved": [2, { ignore: ["./assets"] }]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"]
      }
    }
  }
};
