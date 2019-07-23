function number2 (str) {
	let result = '';
	str = str.split(' ');
	word = str[str.length - 1];
	for(let i = 0; i != 10; ++i) {
		index = parseInt(Math.random() * word.length);
		result += word[index]
		if(i === 4) {
			result += ' ';
		}
	}
	return result;
}

console.log(number1('Footballer tima wants to play'));