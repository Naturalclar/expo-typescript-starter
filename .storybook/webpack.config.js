const path = require("path");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("ts-loader")
      }
    ]
  });
  config.module.rules.push({
    test: /\.jsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["module:metro-react-native-babel-preset"]
        }
      }
    ]
  });
  // react-native を import している箇所を react-native-web に変換
  config.resolve.alias["react-native$"] = require.resolve("react-native-web");

  config.resolve.alias["@expo/vector-icons"] = path.resolve(
    __dirname,
    "../node_modules/react-native-vector-icons"
  );

  // .ts, .tsx を含めるように追加
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
