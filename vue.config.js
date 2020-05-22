  module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000/api'
      : 'http://appnodejs.mebdesign.fr/api'
  }