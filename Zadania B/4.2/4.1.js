const reducer = (accumulator, currentValue) => accumulator + currentValue;

function TwoToTen (str) {
	let arr = str.split('');
	let arr1 = [];
	let result = 0;
	let indexPoint = 0;
	for(let i = 0; i != arr.length; ++i) {
		if(arr[i] === '.') {
			indexPoint = i;
			arr1 = arr.slice(i+1, arr.length);
		}
	}
	arr = transformStringToArray(arr.slice(0, indexPoint));
	arr1 = transformStringToArray(arr1);
	result = GetSumBP(arr)+GetSumAP(arr1);
	return result;
}

function number1 (str) {
	str = TwoToTen(str);
	let numbers = parseInt(str);
	
}

console.log(number1('1011.11'));








function GetSumAP (arr) {
	let result = arr.map((currentValue, index) => {
		return currentValue = currentValue * Math.pow(2, -(1+index));
	})
	result = result.reduce(reducer);
	return result;
}

function GetSumBP (arr) {

	let result = arr.map((currentValue, index) => {
		return currentValue = currentValue * Math.pow(2, arr.length - index - 1);
	})
	result = result.reduce(reducer);
	return result;
}

function transformStringToArray (str) {
	let arr = str;
	for(let i = 0; i != str.length; ++i) {
		if(arr[i] == 1) {
			arr[i] = 1;
		}
		else {
			arr[i] = 0;
		}
	}
	return arr;
}