function isPolindrom (str) {
	return str == str.split('').reverse().join('');
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

function number9 (value) {
	for(let i = 0; i != value; ++i) {
		i = i.toString();
		return isPolindrom(convertTo2(i)) && isPolindrom(i);
	}
}