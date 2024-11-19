const reverseString = (input) => {
  // split the string so we have each individual character
  input.split("");
  // create a reverse string arrau that will hold the reversed string when split
  let reverse = [];
  // create a loop that will push each character into the new array
  for (let i = input.length - 1; i >= 0; i--) {
    reverse.push(input[i]);
  }
  // turn the revrse variable to a string and replace commas
  return reverse.toString().replaceAll(",", "");
};

console.log(reverseString("Hello"));
