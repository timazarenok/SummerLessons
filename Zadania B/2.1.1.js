function Number1 (value) {
	let temp = 0;
	let array1 = new Array();
	let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for(; parseInt(value) != 0; value/=10)
	{
		temp = parseInt(value%10);
		array1.push(temp);
	}
	return result.map((index, currentValue)=>{
		for(let i = array1.begin; i != array1.end; ++i)
		{
			if(index == array1[i])
			{
				currentValue++;
			}
		}
	});
}

console.log(Number1(565));
