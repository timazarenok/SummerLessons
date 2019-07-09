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



function Number5(value){
	let count = 0;
	for(let i = value; i != 0; --i)
	{
		
	}
}

console.log(Number5(12));