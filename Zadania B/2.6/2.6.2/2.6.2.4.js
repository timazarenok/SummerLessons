function Number4 (k) {
		let str = '';
	for(let i = 0; i != 20; ++i)
	{
		str += Math.pow(3, i);
	}
	return str[k-1];
}
console.log(Number4(4));