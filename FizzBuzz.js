const fizzBuzz = () => {
  // create a for loop that will check numbs 1 to 100;
  for (let i = 0; i <= 100; i++) {
    // check if the remainder of i divided by 3 AND i divided by 5 is 0 so that we will be able to tell if it is a multiple of 5 and 3
    // if so pring "FizzBuzz" if not check next condition
    // repeat steps for 5 and 3 individually and if it does not match any of them just log the number
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz());
