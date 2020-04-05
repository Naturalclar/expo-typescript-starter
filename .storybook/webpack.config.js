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
    threadLoader.warmup(tsWorkerOptions, ["babel-loader"]);
  }
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      { loader: "cache-loader" },
      { loader: "thread-loader", options: tsWorkerOptions },
      {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-typescript"]
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.jsx?$/,
    include: [
      path.resolve(__dirname, "../node_modules/react-native"),
      path.resolve(__dirname, "../node_modules/react-native-paper"),
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
  // convert react-native to react-native-web for storybook
  config.resolve.alias["react-native$"] = require.resolve("react-native-web");

  config.resolve.alias["@expo/vector-icons"] = path.resolve(
    __dirname,
    "../node_modules/react-native-vector-icons"
  );

  // inlcude .ts and .tsx files
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
