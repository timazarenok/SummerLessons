function Number11 (value, m, k) {
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
		if(array1[i] < m)
		{
			++count;
		}
	}
	return count === k;
}

console.log(Number11(678, 8, 1));