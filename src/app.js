const responsive = require('./');

responsive({
	300: function () {console.log('300')},
	400: function () {console.log('400')},
	500: function () {console.log('500')},
	700:  function () {console.log('700')}
});

responsive().media(800, function (point) {
	console.log(point);
});

responsive(900, function (point) {
	console.log(point);
});

responsive(1000, 1100, 1200, 1600, function (point) {
	console.log(point);
});

console.log(responsive().bps);









