function Number9 (k) {
	let str = '11';
	let array = new Array();
	array[0] = 11;
	for(let i = 1; i != 1000; ++i)
	{
		array[i] = array[i-1] + 10;
		str += array[i];
	}
	return str[k-1];
}
console.log(Number9(4));