var buildConfig = require('hjs-webpack')

var config = buildConfig({
  in: 'src/index',
  out: 'public',
  clearBeforeBuild: true
})
config.entry.unshift('react-hot-loader/patch')

module.exports = config