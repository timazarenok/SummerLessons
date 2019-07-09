function SimpleNumber(value){
	if(value == 1)
	{
		return false;
	}
	for(let i = 2; i != value; ++i)
	{
		if(value%i == 0)
		{
			return false;
		}
	}
	return true;
}

function reverseNumber(value){
	let temp = 0;
	while(parseInt(value)){
		value = parseInt(value);
		temp *= 10;
		temp += value%10;
		value = value/10;
	}
	return SimpleNumber(parseInt(temp));
}

function  reverseNumber2(value) {
	let temp = reverseNumber(parseInt((value/10)));
	temp*=10;
	temp += value%10;
	let temp2 = parseInt((value/10));
	temp2 += (value%10)*100;
	return SimpleNumber(temp) && SimpleNumber(temp2);
}

function reverseNumber3 (value) {
	let temp = 0;
	temp = parseInt(value%100);
	temp*=10;
	temp += parseInt(value/100);
	return SimpleNumber(temp);
}



function GetSimpleNumbers () {
	let array = new Array();
	for(let i = 100; i != 999; ++i)
	{
		if(SimpleNumber(i)){
			array.push(i);
		}
	}   
	return array;
}

function Number9 () {
	let array = GetSimpleNumbers();
	for(let i = 0; i != array.lenght; ++i){
		if((reverseNumber(array[i]) && reverseNumber2(array[i])) && reverseNumber3(array[i]))
		{
			console.log(array[i]);
		}
	}
}

Number9();