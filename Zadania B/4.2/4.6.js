const NUMBER16 = [ ['0', 0], ['1', 1], ['2', 2],
				   ['3', 3], ['4', 4], ['5', 5],
				   ['6', 6], ['7', 7], ['8', 8],
				   ['9', 9], ['A', 10], ['B', 11], 
				   ['C', 12], ['D', 13],['E', 14], 
				   ['F', 15],]

function number5 (value) {
	let ostatok = 0;
	let result = '';
	for(; value; ){
		result += revertNumber(value%16);
		value = parseInt(value/16);
	}
	return result.split('').reverse().join('');
}

console.log(number5(1234));


function revertNumber (value) {
	for(let j = 0; j != NUMBER16.length; ++j) {
		if(value === NUMBER16[j][1]) {
		value = NUMBER16[j][0];
		}
	}
	return value;
}