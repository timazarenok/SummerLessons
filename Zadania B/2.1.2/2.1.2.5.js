function Number3 (value, k) {
	let sum = 0;
	value1 = parseInt(value);
	value = value - value1;
	value = parseInt(value*Math.pow(10, k));
	let array1 = new Array();
	for(; parseInt(value) != 0; value/=10)
	{
		temp = parseInt(value%10);
		array1.push(temp);
	}
	for(let i = 1; i != array1.length; ++i)
	{
		sum += array1[i];
	}
	return array1[0] == sum;
}

console.log(Number3(7.43292332, 4));