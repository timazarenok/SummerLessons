function Number1 (k) {
	let str = '';
	for(let i = 0; i != 20; ++i)
	{
		str += Math.pow(5, i);
	}
	return str[k-1];
}
console.log(Number1(4));