module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
        resolve: {
          alias: {
              'vue': 'vue/dist/vue.js'
          }
        }
      }
    ]
  },
  // plugin omitted
}