const responsive = require('./');

let funCall = function (param) {
	console.log('funCall  -- ' + param);
}

let obj = {};

responsive({
	300: function () {console.log('300')},
	400: function () {console.log('400')},
	500: function () {console.log('500')},
	700:  function () {console.log('700')}
});

responsive(800, function (point) {
	console.log(point);
});

responsive(900, function (point) {
	console.log(point);
});












