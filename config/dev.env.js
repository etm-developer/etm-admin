'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://118.24.135.98:9090/api"',
  BASE_API: '"http://122.112.246.141:8080/api"',
  // BASE_API: '"http://localhost:9090/api"',
})
