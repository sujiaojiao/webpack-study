const path = require('path');

module.exports={
	// mode默认production会压缩  development不会压缩
	mode:'production'
	// enter 入口省略了main
	entry:'./src/index.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname, 'dist')
	}
}