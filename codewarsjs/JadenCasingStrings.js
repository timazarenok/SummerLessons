String.prototype.toJadenCase = function () {
  return this.split(' ').map((el) => {
  	return el.split('').map((el, index) => index === 0 ? el.toUpperCase() : el).join('');
  	}).join(' ');
};

let a = 'How can mirrors be real if our eyes arent real';
console.log(a.toJadenCase());


// String.prototype.toJadenCase = function () {
//   return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// };