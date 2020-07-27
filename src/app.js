const responsive = require('./');

responsive({
	300: function (point) {console.log(point)},
	400: function (point) {console.log(point)},
	500: function (point) {console.log(point)},
	700: function (point) {console.log(point)}
});

responsive().media(800, function (point) {console.log(point)});

responsive(900, function (point) {console.log(point)});
responsive(1000, 1100, 1200, 1600, function (point) {console.log(point)});









