// String is for the text and target is the word we are searching for.
let string = " Hello World :D ",
  target = "Hello";
// Search searches through the text and find the word you put in target.
target = string.search(`${target}`);
//If The word exist it will print true if it doesnt it will print false.
if (target >= 1) {
  console.log("True ,", string);
} else {
  console.log(`False Your Word Does Not Exist In ${string}`);
}
