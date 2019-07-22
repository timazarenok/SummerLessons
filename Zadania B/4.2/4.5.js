const NUMBER16 = [
				  ['0', 0],
				  ['1', 1],
				  ['2', 2],
				  ['3', 3],
				  ['4', 4],
				  ['5', 5],
				  ['6', 6],
				  ['7', 7],
				  ['8', 8],
				  ['9', 9],
				  ['A', 10],
				  ['B', 11], 
				  ['C', 12], 
				  ['D', 13],
				  ['E', 14], 
				  ['F', 15],]
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function number5 (str) {
	let arr = str.split('');
	for(let i = 0; i != arr.length; ++i) {
		for(let j = 0; j != NUMBER16.length; ++j) {
			if(arr[i] === NUMBER16[j][0]) {
			arr[i] = NUMBER16[j][1];
			}
		}
	}
	return arr.map((el, index, array) => {
		return el = el * Math.pow(16, array.length-index-1);
	}).reduce(reducer);
}

console.log(number5('B'));