function Number8 (value, k) {
	let temp = 0;
	let array1 = new Array();
	for(; parseInt(value) != 0; value/=10)
	{
		temp = parseInt(value%10);
		array1.push(temp);
	}
	let count = 0;
	for(let i = 0; i != array1.length; ++i)
	{
		for (let j = i+1; j < array1.length; j++)
		{
			if(array1[i] == array1[j])
			{
				count++;
			}		
		}
		if(count > k)
		{
			return true;
		}
	}
	return false;
}

console.log(Number8(565678, 2));