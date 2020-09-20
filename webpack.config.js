const path = require('path');
module.exports = {
  entry: {
		site: "./src/site.js"
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /\.babelrc/,
        use: [ 'vue-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { modules: false }]
              ]
            }
          }
        ]
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
    vue: 'Vue',
  }
};
