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

function reverseNumber(value){
	let temp = 0;
	while(parseInt(value)){
		value = parseInt(value);
		temp *= 10;
		temp += value%10;
		value = value/10;
	}
	return parseInt(temp);
}

function Number2 (a, b) {
	for(let i = a; i != b; ++i)
	{
		if(SimpleNumber(i) && SimpleNumber(reverseNumber(i)))
		{
			console.log(i);
		}
	}
}

Number2(1, 100);