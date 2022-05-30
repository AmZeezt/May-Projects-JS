// this function checks if string is a Palindrome

function palindrome(str) {
  // make array out of string and lowerCase it
  let dummyArray = str.toLowerCase().split("");
  // make 2 filtered arrays, pass only numbers and letters, one will be reversed
  let regex = new RegExp('[a-zA-Z0-9]');
  let arr = dummyArray.filter(procesed => regex.test(procesed))
  let arrReversed = arr.slice().reverse();
  // back t/f, check coresponding letters in 2 arrays made previously
  return arr.every((procesed, index) => procesed === arrReversed[index]);
}