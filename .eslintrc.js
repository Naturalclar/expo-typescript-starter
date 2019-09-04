module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: ["react", "@typescript-eslint"],
  globals: {
    __DEV__: true
  },
  env: {
    jest: true
  },
  rules: {
    "import/prefer-default-export": [0],
    "@typescript-eslint/explicit-function-return-type": [0],
    "@typescript-eslint/prefer-interface": [0],
    "react/jsx-filename-extension": [2, { extensions: [".tsx", ".ts"] }],
    // use custom non-unused-vars for typescript
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.tsx", "**/*.story.tsx"]
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
