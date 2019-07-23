function number3 (str) {
	let result = '';
	str = str.split(' ');
	let newStr = '';
	for(let i = 0; i != str.length; ++i) {
		if(str[i].length === 4) {
			newStr += str[i];
			newStr += ' ';
		}
	}
	return newStr;
}

console.log(number3('Footballer tima wants to play'));