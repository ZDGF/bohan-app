module.exports = function buildConfig(env) {
	// console.log('....', env)
  return require('./build/' + env + '.js')(env)
};