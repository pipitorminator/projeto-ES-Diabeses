var fs = require('fs')
var path = require('path')

module.exports = {
  //baseUrl: '/',
  publicPath: '/',
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
  },

};
