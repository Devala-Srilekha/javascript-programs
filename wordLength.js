function longestWordLength (str) {
    // Step 1 -> Use regular expressions to remove all non-word characters e.g. "," with replace function
    var stringWithoutSpecialCharacters = str.replace(/\W/g, ' ');
    // Step 2 -> Declare a variable `longestWord` and set it equal to `0`
  var longestWord = 0;
    // Step 3 -> Declare a variable `wordArray` and use split method to
      // create an array of words.
  var wordArray = stringWithoutSpecialCharacters.split(' ');
    // Step 4 -> Create a for loop to loop through `wordArray`
  for (var i = 0; i < wordArray.length; i++) {
      // Step 5 -> create a conditional to ask if the length of current
      // item in the array is `>` than `longestWord`
    if (wordArray[i].length > longestWord) {
      // Step 6 ->  In the code block set `longestWord` to the length of current
      // item in being looped over in the array
      longestWord = wordArray[i].length;
    }
  }
      // Step 7 -> return `longestWord`
  return longestWord;
// }

console.log('Hi, where is the airport?');
console.log('Thanks for stopping by');