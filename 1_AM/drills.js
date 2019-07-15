const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  let out = str.split(" ")
  console.log(out)
  console.log(typeof(out))
  console.log(typeof([ 'Hello', 'World!' ]))
  return out
};

const reverse = str => {
  // TODO - write a function which reverses the string
  str.split("")
  let out = ""
  for (i=0;i<str.length;i++){
    out += str[(str.length - 1) - i]
  }
  return out
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  let out = 1
  for (i=num;i>0;i--){
    out *= i
  }
  return out
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length != arr2.length){
    return -1
  }
  let out = []
  for (i=0;i<arr1.length;i++){
    out.push([arr1[i], arr2[i]])
  }
  return out
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  let out1 = []
  let out2 = []
  for (i=0;i<arr.length;i++){
    out1.push(arr[i][0])
    out2.push(arr[i][1])
  }
  console.log([out1,out2])
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
//assert (tokenize("Hello World!") === [ 'Hello', 'World!' ])
assert (reverse("3df") === "fd3")
assert (factorial(5) === 120)
//assert (zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]])
assert (unzip([[1, 5], [2, 3], [3, 1]]) === [ [ 1, 2, 3 ], [ 5, 3, 1 ] ])