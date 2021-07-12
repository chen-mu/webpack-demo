const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
	// JS 执行入口文件
	mode: 'production',
	devtool: 'hidden-source-map'
})
