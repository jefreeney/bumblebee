/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
	'use strict'
	var menu = __webpack_require__(1);
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
	'use strict';

	var util = __webpack_require__(2);
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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
	'use strict'
	var menu = __webpack_require__(0);
console.log('my app..........');

})();

/***/ })
/******/ ]);