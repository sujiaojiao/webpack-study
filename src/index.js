

// 浏览器识别不了import webpack模块打包引入工具
// Es Moudule 模块引入方式
// CommonJs  CMD AMD
var Header = require('./header.js');
var Sidebar = require('./sidebar.js');
var Content = require('./content.js');
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';

new Header();
new Sidebar();
new Content();

