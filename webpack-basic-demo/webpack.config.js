const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// JS 执行入口文件
	mode: 'development',
	entry: {
		main: './src/demo/index.js'
		// main1: './main1.js'
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
			template: './src/demo/index.html',
			filename: 'demo.html',
			chunks: ['main'],
			inject: 'body'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader?cacheDirectory'],
				include: path.resolve(__dirname, 'src')
			},
			{
				// 命中 SCSS 文件
				test: /\.scss$/,
				// 使用一组 Loader 去处理 SCSS 文件。
				// 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
				use: ['style-loader', 'css-loader', 'sass-loader'],
				// 排除 node_modules 目录下的文件
				exclude: path.resolve(__dirname, 'node_modules')
			},
			{
				// 对非文本文件采用 file-loader 加载
				test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
				use: ['file-loader']
			}
		]
	}
}
