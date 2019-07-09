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


function Number6(k){
	let arra1 = new Array();
	let array = new Array();
	for(let i = 0; i != 1000; ++i)
	{
		if(SimpleNumber(i)){
			arra1.push(i);
		}
	}
	for(let j = 0; j != arra1.length; ++j)
	{
		if(SimpleNumber(j)){
			array.push(arra1[j])
		}
	}
	return array[k];
}

console.log(Number6(35));