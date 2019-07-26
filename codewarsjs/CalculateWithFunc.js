function callback(number, operator) {
  if(!operator) {
    return number;
  }
  return operator(number);
}  

function zero(operator) { return callback(0, operator)}
function one(operator) { return callback(1, operator)}
function two(operator) { return callback(2, operator)}
function three(operator) { return callback(3, operator)}
function four(operator) { return callback(4, operator)}
function five(operator) { return callback(5, operator)}
function six(operator) { return callback(6, operator)}
function seven(operator) { return callback(7, operator)}
function eight(operator){ return callback(8, operator)}
function nine(operator){ return callback(9, operator)}

function plus(number) { return function(value){ return number + value}}
function minus(number) { return function(value){ return  value - number}}
function times(number) { return function(value){ return number * value}}
function dividedBy(number) { return function(value){ return parseInt(value/number)}}