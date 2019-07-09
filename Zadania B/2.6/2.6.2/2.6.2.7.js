function Number7 (k) {
	let str = '';
	for(let i = 1; i != 10000; ++i)
	{
		str += Math.pow(i,3);
	}
	return str[k-1];
}
console.log(Number7(4));