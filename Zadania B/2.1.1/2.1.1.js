function Number1 (value) {
	let temp = 0;
	let array1 = new Array();
	for(; parseInt(value) != 0; value/=10)
	{
		temp = parseInt(value%10);
		array1.push(temp);
	}
	let count = 1;
	for(let i = 0; i != array1.length; ++i)
	{
		for(let j = i+1; j != array1.length; ++j)
		{
			if(array1[i] == array1[j])
			{
				count++;
			}
		}
		if(count > 2)
		{
			return false;
		}
	}
	return count > 1 ? true : false;
}

console.log(Number1(52156));
