(function(){
	'use strict';

	var util = require('./util.js');
	function menuItem(config){
	config = config || {}; 
	var o = {
		ele: null,
		data: config.data,
		init: function(){
			this.initEle();
			this.initEvent();
		},
		initEle: function(){
			this.ele = util.make('div', 'app__menu-item');
			this.ele.innerHTML = this.data;
		},
		initEvent: function(){}
	};
	o.init(); /* always initialise the function at the end - factory etc */
	return o;
};
// console.log('menu item... blah');


module.exports = menuItem;
})();
