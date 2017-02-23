(function(){
	'use strict'
	var menu = require('./menu-item.js');
	var data = ['home', 'contact us', 'about us', 'other'];
	
		var menu = {
			ele: null,
			data: data,
			menuItem:[],
			init: function(){
				this.initEle();
				this.initEvent();
			},
			initEle: function(){
				var d;
				var mi;
				for(var i =0, ln = this.data.length; i< ln; i+=1){
					d = this.data[i];
					mi = menuItem({
						data: d
					});
					this.menuItem.push(mi);
				}
			},
			initEvent: function(){}
		};
	console.log('menu item... blah');
	
	
menu.init();
	module.exports = menu;
	// var menu={}
console.log('menu...');

})();