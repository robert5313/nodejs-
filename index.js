var util = require('util');
var myInt = setInterval(function () {
var txt = 'Congratulate %s on your %dth birthday!';
var result = util.format(txt, 'Robert', 24); 
console.log(result)}, 100000);