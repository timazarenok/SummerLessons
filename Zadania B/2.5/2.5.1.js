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

console.log(SimpleNumber(5));


function Number1(value){
	for(let i = 0; i != 100; ++i)
	{
		if(value%i == 0 && SimpleNumber(i))
		{
			console.log(i);
		}
	}
}

Number1();