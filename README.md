# rw-design

## Use
```javascript
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
```

## Media queries

| min  	| max 	|
|-------|-------|
| 0  	| 300  	|
| 301  	| 400  	|
| 401  	| 500  	|
| 501  	| 700  	|
| 701  	| 800  	|
| 801  	| 900  	|
| 901  	| 1000 	|
| 1001 	| 1100 	|
| 1101 	| 1200 	|
| 1201 	| 1600 	|