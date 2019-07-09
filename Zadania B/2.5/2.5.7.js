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
	for(let i = 0; i != 1000; ++i)
	{
		if(SimpleNumber(i)){
			array.push(i);
		}
	}
	return array;
}

function GetSum(value){
	let sum = 0;
	while(parseInt(value)){
		value = parseInt(value);
		sum += value%10;
		value = value/10;
	}
	return parseInt(sum);
}


function Number7 (m) {
	let sum = 0;
	let array = GetSimpleNumbers();
	for(let i = 0; i != array.length; ++i){
		if(sum < m)
		{
			console.log(array[i]);
			sum += GetSum(array[i]);	
		}
	}
}

Number7(15);