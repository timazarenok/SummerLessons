function number11 (m) {
	m = convertTo2(m).split('').reverse().join('');
	for(let i = 0; i != 1000000; ++i) {
		if(convertTo2(i) === m) {
			console.log(i);
		}
	}
}

const convertTo2 = (value) => {
	return value.toString(2);
}

number11(5);
