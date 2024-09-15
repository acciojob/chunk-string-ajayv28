function stringChop(str, size) {
  // your code here
	let chunks = [];
	for(let i=0; i<str.length; i=i+length){
		let subStr = str.slice(i, i+size);
		chunks.push(subStr);
	}
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
//alert(stringChop(str, size));
