const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    options: './src/options.tsx',
    popup: './src/popup.tsx',
  },
  output: {
    filename: 'assets/[name].js',
    clean: true
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'tailwindcss',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '' }
      ]
    })
  ]
}
