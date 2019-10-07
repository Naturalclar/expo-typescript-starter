module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel',
      "babel-plugin-styled-components",
      [
        "module-resolver",
        {
          "root": ["./src"],
          "alias": {
            'react-native-vector-icons': '@expo/vector-icons',
            "src": "./src",
            "assets": "./assets",
            "config": "./src/config",
            "locales": "./src/locales",
            "helpers": "./src/helpers",
            "containers": "./src/containers",
            "components": "./src/components",
            "screens": "./src/screens",
            "store": "./src/store",
            "theme": "./src/theme"
          }
        }
      ]
    ],
  }
}