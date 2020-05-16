/*module.exports = {
    devServer: {
      proxy: 'http://localhost:3000/api'
    }
  }
*/
  module.exports = {
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        proxy: 'http://appnodejs.mebdesign.fr/api'
      } else {
        devServer: {
          proxy: 'http://localhost:3000/api'
        }
      }
    }
  }