const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// JS 执行入口文件
	mode: 'development',
	entry: {
		main: './main.js',
		main1: './main1.js'
	},
	output: {
		// 把所有依赖的模块合并输出到一个 bundle.js 文件
		filename: '[name]__[hash:8].js',
		// 输出文件都放到 dist 目录下
		path: path.resolve(__dirname, './dist')
	},

	devServer: {
		// 必须配置的选项，服务启动的目录，默认为根目录
		contentBase: './dist',
		// 使用热加载时需要设置为 true
		hot: true,
		inline: true,
		open: true
	},

	plugins: [
		// new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(), //热更新插件
		new HtmlWebpackPlugin({
			title: 'main',
			template: './public/index.html',
			filename: 'index.html',
			chunks: ['main'],
			inject: 'body'
		}),
		new HtmlWebpackPlugin({
			title: 'main1',
			template: './public/index1.html',
			filename: 'index1.html',
			chunks: ['main1'],
			inject: 'body'
		})
	]
}
