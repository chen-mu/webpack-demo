const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// JS 执行入口文件
	mode: 'development',
	entry: {
		main: ['webpack-hot-middleware/client?reload=true', './src/demo/index.js']
		// main1: './main1.js'
	},
	output: {
		// 把所有依赖的模块合并输出到一个 bundle.js 文件
		filename: '[name].js',
		// 输出文件都放到 dist 目录下
		path: path.resolve(__dirname, './dist'),
		publicPath: 'http://localhost:3000/dist/',
		chunkFilename: '[name]_[chunkhash:8]_chunk.js'
	},

	plugins: [
		// new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(), //热更新插件
		// new webpack.optimize.OccurenceOrderPlugin(),
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
			{ test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
			// 新增css加载规则
			{
				test: /.css$/,
				use: ['style-loader', 'css-loader']
			},

			// less的解释其实就是在css解析的基础上加上 less-loader 即可！
			{
				test: /.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	}
}
