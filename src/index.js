const foreach = require('lodash/foreach');
const debounce = require('lodash/debounce');
const isInteger = require('lodash/isInteger');
const isFunction = require('lodash/isFunction');
const rwd = {
	queries: [],
	callback: {},
	breakpoint: null
};

module.exports = function (...args) {
	const total = args.length;
	const callback = total > 0 && isFunction(args[total - 1]) ? args.pop() : null;

	// ## @integer, @integer... @function - callback
	if (callback && args.every(isInteger)){
		rwd.queries = rwd.queries.concat(args);
		
		// #####
		args.forEach(point => {
			rwd.callback[point] = callback;
		});

		rwd.set();
	}

	if (total === 1){
		foreach(args[0], function (value, key) {
			rwd.media(parseInt(key), value);
		});
	}

	if (total === 0){
		return rwd;
	}
}

rwd.media = function(query, callback = null) {
	this.queries.push(query);
	this.callback[query] = callback;
	this.set();
}

rwd.set = function () {
	this.resolutions = this.queries.map(this.map);
	this.check();
}

rwd.map = function (point) {
	return rwd.queries.some(x => x < point)  
	? [Math.max.apply(Math, rwd.queries.filter(e => e < point)), point] 
	: [0, point];
}

rwd.check = function () {
	this.screen = document.body.offsetWidth;

	if (!this.breakpoint){
		this.setView();
		window.addEventListener('resize', debounce(rwd.check.bind(rwd), 300));
	} else if(this.screen < this.breakpoint.min || this.screen >= this.breakpoint.max){
		this.setView();
	}
}

rwd.setView = function() {
	this.resolutions.forEach(([min, max]) => {
		if (this.screen > min && this.screen <= max){
	 		this.breakpoint = {min: min, max: max};
			this.callback[max](max);
		}
	});
}

