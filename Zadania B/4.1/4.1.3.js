function number3 (str) {
	 let maybeResult = str.toLocaleLowerCase().split('').map((currentValue, index, array) => {
	 	return !(array.slice(index+1).includes(currentValue)) && !(array.slice(0, index).includes(currentValue));
	 })
	 console.log(maybeResult);
	 let str1 = str.split('');
	 for(let i = 0; i != maybeResult.length; ++i) {
	 	if(maybeResult[i]) {
	 		return str1[i];
	 	}
	 }
	 return '';
}


console.log(number3('ffeyui'));

