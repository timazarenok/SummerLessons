function number4 (str) {
	 let maybeResult = str.toLocaleLowerCase().split('').map((currentValue, index, array) => {
	 	return !(array.slice(index+1).includes(currentValue)) && !(array.slice(0, index).includes(currentValue));
	 })
	 let str1 = str.split(',').toString();
	 for(let i = 0; i != maybeResult.length; ++i) {
	 	if(!maybeResult[i]) {
	 		result = str1.split(str1[i]).join('');
	 		return number4(result);
	 	}
	 }
	 return result;
}

console.log(number4('tioimmt'));