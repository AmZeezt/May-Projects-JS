// those functions will decode rot13 cipher

// singleRot13Letter - decodes one letter, if wrong argument detected return argument
const singleRot13Letter = letter => {
  // test if argument is provided acoording to standard
  let regex = /[A-Z]/;
  if (! regex.test(letter)) {
    return letter;
  }

  // declare alphabet
  let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  // decipher provided letter
  let shiftedLetterIndex = arr.indexOf(letter) - 13;
  if (shiftedLetterIndex < 0) {
    shiftedLetterIndex = 26 + shiftedLetterIndex;
  }

  //return shifted letter
  return arr[shiftedLetterIndex];
};


// rot13 - uses singleRot13Letter to decode whole stings
const rot13 = str => str.split("").map(procesed => singleRot13Letter(procesed)).join("");
