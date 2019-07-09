function Number8 (k) {
	let str = '11';
	let array = new Array();
	array[0] = 1;
	array[1] = 1;
	for(let i = 2; i != 100; ++i)
	{
		array[i] = (array[i-1] + array[i-2]);
		str += array[i];
	}
	return str[k-1];
}
console.log(Number8(4));