const reducer = (accumulator, currentValue) => accumulator + currentValue;


function listSquared(m , n) {
	let arr = [];
	let sum = 0;
	let result = [];
    for(let i = m; i != n; ++i) {
    	arr = getDivisors(i);
    	sum = arr.map((el) => {
    		return el = Math.pow(el, 2);
    	}).reduce(reducer, 0);
    	arr = [];
    	if(Number.isInteger(Math.sqrt(sum))){
    		result.push([i, sum]);
    	}
    }
    return result;
}
	
function getDivisors(integer) {
let array = [];
  for(let i = 0; i <= integer; ++i) {
  	if(integer%i == 0) {
  		array.push(i);
  	}
  }
  return array;
};
