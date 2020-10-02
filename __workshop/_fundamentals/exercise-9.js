// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  // Your code here
  if (paragraph.length <= 40) {
    return paragraph;
  } else {
    let newLine = "\n";
    let str = paragraph.split("");
    let answer = "";
    for (let i = 0; i < str.length; i++) {
      if ((i + 1) % 40 === 0 && i !== 0) {
        answer += str[i];
        if (str[i + 1] === " ") {
          i++;
        }
        answer += newLine;
      } else {
        answer += str[i];
      }
    }
    return answer;
  }
};
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
