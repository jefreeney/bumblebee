(function(){
	'use strict';

	var util = {
		make: function(type, clss) {
			var ele = document.createElement(type);
			ele.className = clss;
			return ele;
		}

	};

	module.exports = util;
})();