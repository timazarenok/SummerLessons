function Number5(a, b, n){
	for(let i = 0; i != 100; ++i)
	{
		if(((a+i) < n) || ((b+i) < n))
		{
			console.log(i);
		}
	}
}

Number5(2, 3, 9);