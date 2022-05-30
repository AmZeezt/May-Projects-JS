// this function checks if provided string looks like US phone number 
 
function telephoneCheck(str) {
  // check if 1st number is 1 and second position is non-digit
  const trigerFlag = dummyStr => /^1\D/.test(dummyStr);

  // check patterns 
  if (/\d{3}-\d{3}-\d{4}$/.test(str)) {
    if (str.length == 12) {
      return true;
    } else {
      return trigerFlag(str);
    }
  } else if (/\(\d{3}\)\d{3}-\d{4}$/.test(str)) {
    if (str.length == 13) {
      return true;
    } else {
      return trigerFlag(str);
    }
  } else if (/\(\d{3}\) \d{3}-\d{4}$/.test(str)) {
    if (str.length == 14) {
      return true;
    } else {
      return trigerFlag(str);
    }
  } else if (/\d{3} \d{3} \d{4}$/.test(str)) {
    if (str.length == 12) {
      return true;
    } else {
      return trigerFlag(str);
    }
  } else if (/\d{10}$/.test(str)) {
    if (str.length == 10) {
      return true;
    } else {
      return trigerFlag(str);
    }
  } 

  // if patern is not recognized return false
  return false
}

