function SimpleNumber(value){
	if(value == 1)
	{
		return false;
	}
	for(let i = 2; i != value; ++i)
	{
		if(value%i == 0)
		{
			return false;
		}
	}
	return true;
}

function GetSimpleNumbers () {
	let array = new Array();
	for(let i = 1000; i != 9999; ++i)
	{
		if(SimpleNumber(i)){
			array.push(i);
		}
	}
	return array;
}

function GetSumFN (value) {
	value = parseInt(value/100);
	let sum = 0;
	while(parseInt(value) != 0){
		sum += value%10;
		value = parseInt(value/10);
	}
	return sum;
}

function GetSumLN (value) {
	let sum = 0;
	let temp = GetSumFN(value);
	while(parseInt(value) != 0){
		sum += value%10;
		value = parseInt(value/10);
	}
	return sum - temp;
}



function Number8 () {
	let array = GetSimpleNumbers();
	for(let i = 0; i != array.length; ++i){
		if(GetSumFN(array[i]) == GetSumLN(array[i])){
			console.log(array[i]);
		}
	}
}

Number8();