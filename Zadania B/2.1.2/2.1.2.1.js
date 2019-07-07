function Number1 (value, k) {
	let count = 0;
	value1 = parseInt(value);
	value = value - value1;
	value = parseInt(value*Math.pow(10, k));
	for(; value; value/=10)
	{
		value1 = parseInt(value%10);
		if(value1 === 9)
		{
			count++;
		}
	}
	return count;
}

console.log(Number1(99.3932199999, 8));