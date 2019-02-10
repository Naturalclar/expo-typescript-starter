module.exports = {
  parser: "typescript-eslint-parser",
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["react", "typescript"],
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".tsx", ".ts"] }]
  }
};
