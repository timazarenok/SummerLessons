function Number3 (value) {
	let temp = 0;
	let array1 = new Array();
	for(; parseInt(value) != 0; value/=10)
	{
		temp = parseInt(value%10);
		array1.push(temp);
	}
	for(let i = 0, j = array1.length-1; i != array1.length, j != 0; ++i, --j)
	{
		if(array1[i] != array1[j])
		{
			return false;
		}
	}
	return true;
}

console.log(Number3(456654));