// this function converts Arabic numbers to Roman numbers

function convertToRoman(num) {

  // declare output string and multiplier of roman number
  let convertedRoman = "";
  let floredMultiplier = 0; 

  // create Roman numbers object to relate to
  const Roman = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

  // loop for each value
  for (let i = 0; i < Object.keys(Roman).length; i++) {
    
    // asign multiplier
    floredMultiplier = Math.floor(num / Object.values(Roman)[i]);

    // decrease initial number and add multiplied roman number
    convertedRoman += Object.keys(Roman)[i].repeat(floredMultiplier);
    num -= floredMultiplier * Object.values(Roman)[i];

  }

  // return processed number
  return convertedRoman;
}