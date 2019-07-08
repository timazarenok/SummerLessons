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

function Number3 (value) {
	while(value != 1)
	{
		for(let i = 0; i != 100; ++i)
		{
			if(value%i == 0 && SimpleNumber(i))
			{
				value /= i;
				console.log(i);
				i = 0;
			}
		}
	}
}

Number3(183);