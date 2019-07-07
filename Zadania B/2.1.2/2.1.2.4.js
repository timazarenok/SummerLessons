function Number4 (value, k) {
	let sum = 0;
	value = value - parseInt(value);
	value = parseInt(value*Math.pow(10, 4));
	let array1 = new Array();
	for(; parseInt(value) != 0; value/=10)
	{
		temp = parseInt(value%10);
		array1.push(temp);
	}
	for(let i = 0; i != k; ++i)
	{
		sum += array1[i];
	}
	return array1;
}

console.log(Number4(342232.7532, 2));

