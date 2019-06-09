const path = require("path");
const threadLoader = require("thread-loader");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const jsWorkerCommonOptions = {
  workers: 2,
  workerParallelJobs: 50,
  poolParallelJobs: 50
};

const babelWorkerOptions = {
  ...jsWorkerCommonOptions,
  name: "babel-pool"
};

const tsWorkerOptions = {
  ...jsWorkerCommonOptions,
  name: "ts-pool"
};

module.exports = ({ config, mode }) => {
  if (mode !== "PRODUCTION") {
    threadLoader.warmup(babelWorkerOptions, ["babel-loader"]);
    threadLoader.warmup(tsWorkerOptions, ["ts-loader"]);
  }
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      { loader: "cache-loader" },
      { loader: "thread-loader", options: tsWorkerOptions },
      {
        loader: "ts-loader",
        options: {
          experimentalWatchApi: true,
          transpileOnly: true,
          happyPackMode: true
        }
      }
    ]
  });

  // type-checking
  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })
  );

  config.module.rules.push({
    test: /\.jsx?$/,
    include: [
      path.resolve(__dirname, "../node_modules/react-native-paper"),
      path.resolve(__dirname, "../node_modules/react-native-elements"),
      path.resolve(__dirname, "../node_modules/react-native-safe-area-view"),
      path.resolve(__dirname, "../node_modules/react-native-vector-icons"),
      path.resolve(__dirname, "../node_modules/@expo/vector-icons"),
      path.resolve(__dirname, "../node_modules/react-native-ratings"),
      path.resolve(__dirname, "../node_modules/react-native-status-bar-height")
    ],
    use: [
      { loader: "cache-loader" },
      { loader: "thread-loader", options: babelWorkerOptions },
      {
        loader: "babel-loader?cacheDirectory?true",
        options: {
          presets: [
            "module:metro-react-native-babel-preset",
            "@babel/preset-flow"
          ]
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
