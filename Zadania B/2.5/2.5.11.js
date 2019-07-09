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

function GetDeliters(value) {
	let count = 0;
	while(value != 1)
	{
		for(let i = 0; i != 100; ++i)
		{
			if(value%i == 0 && SimpleNumber(i))
			{
				value /= i;
				++count;
				i = 0;
			}
		}
	}
	return count;
}


function GetSimpleNumbers () {
	let array = new Array();
	for(let i = 0; i != 100; ++i)
	{
		if(SimpleNumber(i)){
			array.push(i);
		}
	}   
	return array;

}



function Number11 (n, k) {
	let array = GetSimpleNumbers();
	for(let i = n; i != k; ++i){
		for(let j = 0; j != array.length; ++j)
		if(GetDeliters(i) == (array[j]*array[j+1])){
			console.log(i);
		}
	}
}

Number11(2, 100);