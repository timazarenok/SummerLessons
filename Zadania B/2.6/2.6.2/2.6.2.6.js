function Number6 (k) {
	let str = '';
	for(let i = 10; i != 99; ++i)
	{
		str += i;
	}
	return str[k-1];
}
console.log(Number6(4));