export class Kata {
  static dnaStrand(dna: string) {
    return dna.split("").map((el) => {
		switch (el) {
			case "T":
				return el = "A";
				break;
			case "A":
				return el = "T";
			case "C":
				return el = "G";
			case "G": 
				return el = "C"
			default:
				// statements_def
				break;
		}
	}).join('') 
  }
}