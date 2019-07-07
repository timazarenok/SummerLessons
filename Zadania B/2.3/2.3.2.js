function Number2 (n, m) {
	let number = 0;
	let temp = 0;
	for(let i = n; i != m; ++i)
	{
		num = Math.pow(i, 2);
		number = Math.pow(i, 2);
		temp = 0;
		while(parseInt(number) != 0)
		{
			temp *= 10;
			temp += parseInt(number%10);
			number /= 10;
		}
		if(num == temp)
		{
			console.log(num);
		}
	}
}

Number2(1, 70)