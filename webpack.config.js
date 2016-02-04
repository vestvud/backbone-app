var _ = require('underscore');

var _configs = {
  global: require(__dirname + '/webpack/global'),
  develop: require(__dirname + '/webpack/develop'),
  production: require(__dirname + '/webpack/production')
};

var _load = function(environment, outputPath) {
  var global;
  var env;

  if (!environment) {
    throw 'No local environment variable found via process.env.NODE_ENV';
  }

  if (!_configs[environment]) {
    throw 'No such environments found in configs object';
  }

  global = _configs.global(__dirname, outputPath);

  env = _configs[environment](__dirname, outputPath);
  global.plugins = _.union(global.plugins, env.plugins);
  global.module.loaders = _.union(global.module.loaders, env.module.loaders);

  return global;
};

module.exports = _load(process.env.NODE_ENV, process.env.OUTPUT_STATIC_PATH);