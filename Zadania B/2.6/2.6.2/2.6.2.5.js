function Number5 (k) {
	let str = '';
	for(let i = 1; i != 100000; ++i)
	{
		str += i;
	}
	return str[k-1];
}
console.log(Number5(4));