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



function Number11 (k) {
	let array = new Array();
	let array1 = new Array();
	array[0] = 11;
	for(let i = 1; i != 10000; ++i)
	{
		array[i] = array[i-1] + 10;
		if(SimpleNumber(array[i])){
			array1.push(array[i]);
		}
	}
	return array1[k];
}
console.log(Number11(1));
console.log(Number11(10));
console.log(Number11(100));
console.log(Number11(1000));