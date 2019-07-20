function cakes(recipe, available) {
	let cakesInAvailable = [];
	let check = Object.keys(recipe).map((el) => {
		return available.hasOwnProperty(el);
	});
	for(let i in check) {
		if(!check[i]){
			return 0; 
		}
	}
	  for(let ingredient in recipe){
  	cakesInAvailable.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }
  return Math.min(...cakesInAvailable)
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 


