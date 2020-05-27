const path = require('path');

module.exports={
	// mode默认production会压缩  development不会压缩
	mode:'development',
	// enter 入口省略了main
	entry: './src/index.js',
	// module里面配置图片首先安装file-loader
	module:{
		rules:[{
			test:/\.png$/,
			use:{
				loader:'file-loader'
			}
		}]
	},
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname, 'dist')
	}
}