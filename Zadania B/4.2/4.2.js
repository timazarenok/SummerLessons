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

function convertTo16 (str) {
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
function convertTo2 (value) {
	let result = '';
	let temp = 0; 
	while(value != 1) {
		temp = parseInt(value/2);
		result += value%2;
		value = temp;
	}
	result += 1;
	return result.split('').reverse().join('');
}


function number2 (str) {
	return convertTo2(convertTo16(str));
}

console.log(number2('C'));