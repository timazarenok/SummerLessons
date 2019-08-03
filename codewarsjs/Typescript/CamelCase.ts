export function camelCase(str: string): string {
  return str.split(" ").map(el => {
  	return el.split("").map((el, index) => {
  		return index === 0 ? el.toUpperCase() : el
  	}).join("")
  }).join("");
}


console.log(camelCase('tima wants play football'))