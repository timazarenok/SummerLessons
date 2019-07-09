function Number3 (k) {
		let str = '';
	for(let i = 0; i != 20; ++i)
	{
		str += Math.pow(2, i);
	}
	return str[k-1];
}
console.log(Number3(4));