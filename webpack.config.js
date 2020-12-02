var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		index: "./src/index.js",
	},
	resolve: {
		alias: {
			svelte: path.resolve("node_modules", "svelte"),
		},
		extensions: [".js", ".html", ".npy", ".svelte"],
		mainFields: ["svelte", "browser", "module", "main"],
	},
	output: {
		path: __dirname + "/public",
		filename: "[name].bundle.js",
		chunkFilename: "[name].[id].js",
	},
	module: {
		rules: [
			{
				test: /\.(html|js)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
				},
			},
			{
				test: /\.css$/i,
				use: ["to-string-loader", "css-loader"],
			},
			{
				test: /\.ejs$/i,
				use: ["ejs-loader"],
			},
			{
				test: /\.(svelte)$/,
				exclude: /node_modules/,
				use: {
					loader: "svelte-loader",
					options: {
						hotReload: true,
					},
				},
			},
			{
				test: /\.(npy|npc)$/,
				exclude: /node_modules/,
				loader: "numpy-loader",
				options: {
					outputPath: "data/",
				},
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				loader: "svg-inline-loader",
				options: {
					removeSVGTagAttrs: true,
					removingTagAttrs: ["font-family"],
					idPrefix: true
				},
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				exclude: /node_modules/,
				loader: "file",
				options: {
					outputPath: "images/",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.ejs",
			filename: "index.html",
			chunks: ["index"],
		}),
		new CopyWebpackPlugin([{ from: "static/" }]),
	],
	devServer: {
		historyApiFallback: true,
		overlay: true,
		stats: "minimal",
		contentBase: __dirname + "/public",
	},
	devtool: "inline-source-map",
};
