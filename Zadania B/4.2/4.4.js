function number4 (value) {
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
console.log(number4(17));