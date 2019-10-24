module.exports = {
    entry: '/Users/antoniotorresdeharo/tutorial_react/holamundo/app/components/main.jsx',
    output: {
      path: '/Users/antoniotorresdeharo/tutorial_react/holamundo/public/',
      filename: "build.js",
    },
    module: {
      loaders: [
        {
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  };