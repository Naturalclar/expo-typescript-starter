module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [{ loader: require.resolve("ts-loader") }]
  });
  // react-native を import している箇所を react-native-web に変換
  config.resolve.alias["react-native$"] = require.resolve("react-native-web");
  // .ts, .tsx を含めるように追加
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
