function Number2 (value, k) {
	let sum = 0;
	value1 = parseInt(value);
	value = value - value1;
	value = parseInt(value*Math.pow(10, k));
	let array1 = new Array();
	for(; parseInt(value) != 0; value/=10)
	{
		temp = parseInt(value%10);
		sum += temp;
	}
	return sum;
}

console.log(Number2(4323.323232323554454, 15));