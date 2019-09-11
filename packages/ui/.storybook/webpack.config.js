// See https://github.com/TypeStrong/ts-loader/blob/master/examples/fork-ts-checker-webpack-plugin/webpack.config.development.js

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = ({ config }) => {
  const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      { 
        loader: require.resolve('ts-loader'),
        options: { transpileOnly: true, configFile: tsconfigPath }
      },
    ],
  });
  config.plugins.push( new ForkTsCheckerWebpackPlugin({ tsconfig: tsconfigPath, memoryLimit: 512 }) );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};