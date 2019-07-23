function isPolindrom (str) {
	return str == str.split('').reverse().join('');
}
const NUMBER16 = [ ['0', 0], ['1', 1], ['2', 2],
				   ['3', 3], ['4', 4], ['5', 5],
				   ['6', 6], ['7', 7], ['8', 8],
				   ['9', 9], ['A', 10], ['B', 11], 
				   ['C', 12], ['D', 13],['E', 14], 
				   ['F', 15],];
function convertTo16 (value) {
	let ostatok = 0;
	let result = '';
	for(; value; ){
		result += revertNumber(value%16);
		value = parseInt(value/16);
	}
	return result.split('').reverse().join('');
}
function revertNumber (value) {
	for(let j = 0; j != NUMBER16.length; ++j) {
		if(value === NUMBER16[j][1]) {
		value = NUMBER16[j][0];
		}
	}
	return value;
}

function number9 () {
	for(let i = 0; i != 1000000; ++i) {
		i = i.toString();
		if(isPolindrom(i) && isPolindrom(convertTo16(i))) {
			console.log(i);
		}
	}
}

number9();