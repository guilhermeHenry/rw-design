# rw-design
Adaptar a tela aos dispositivos, por meio do javascript

## Formas de uso
```javascript
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
```

## Media queries
A cada ponto específico, retornará uma função de **callback**

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

## Debounce
Aumentando a performace com o debounce. Limitando o tempo de resposta do sistema ao determinar o tipo de resolução da tela.

## Dependences
+ Lodash



