var webpack = require("webpack");

module.exports = {
	entry: './src/main.js',
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}},
			{
				test: /\.scss$/,
				loaders: ["style", "css?sourceMap", "sass?sourceMap"]
			},
			{
				test: /\.css$/,
				loaders: ["style", "css"]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file?name=public/fonts/[name].[ext]'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
			},
			{ 	
				test: /vendor\/.+\.(jsx|js)$/,
				loader: 'imports?jQuery=jquery,$=jquery,this=>window'
			}
			]
		},


		plugins: [
       new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
   ],
		devServer: {
		// watch:true,
		inline: true,
		host: '0.0.0.0',
		port: '3000',
		watchOptions: {
			aggregateTimeout: 300,
			poll: true
		}
	},
};
