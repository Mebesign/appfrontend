  module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'http://localhost:3000/api'
      : 'http://127.0.0.1/api'
  }