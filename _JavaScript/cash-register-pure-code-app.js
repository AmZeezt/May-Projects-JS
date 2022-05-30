// function behaving like Cash Register

function checkCashRegister(price, cash, cid) {

  // calculate change and sum all cash in register
  let change = cash - price;
  let returnChange = change;
  console.log(change)
  let sumOfCid = cid.reduce((previous, procesed) => 
    previous + procesed[1], 0
  ).toFixed(2);
  // check if change is more than resources inside register or equal to resources
  if (sumOfCid < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (sumOfCid == change) {
    return {status: "CLOSED", change: cid};
  }
  
  // reversing cid array, and clear cid
  let reversedCid = cid.slice().reverse();
  let cidReturn = [
  [ 'ONE HUNDRED', 0 ],
  [ 'TWENTY', 0 ],
  [ 'TEN', 0 ],
  [ 'FIVE', 0 ],
  [ 'ONE', 0 ],
  [ 'QUARTER', 0 ],
  [ 'DIME', 0 ],
  [ 'NICKEL', 0 ],
  [ 'PENNY', 0 ]];


  // declare array of values
  const valuesArr = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

  // loop looking for right change
  for (let i = 0; i < reversedCid.length; i++) { 
    
    // loop if change greater than current value
    while (change > valuesArr[i]) {
      if (reversedCid[i][1] == 0) {break};
      change -= valuesArr[i]
      reversedCid[i][1] -= valuesArr[i];
      cidReturn[i][1] += valuesArr[i];
    };

    // repair JS .error
    if (change > 0 && change < 0.01) {change = 0.01};

    // loop if change equal than current value
    if (change == valuesArr[i]) {
      change -= valuesArr[i]
      reversedCid[i][1] -= valuesArr[i];
      cidReturn[i][1] += valuesArr[i];
    }
  };

  // check if change withdraw is possible
  if (cidReturn.reduce((previous, procesed) => previous + procesed[1], 0).toFixed(2) != returnChange) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
  // return if change posible
  return {status: "OPEN", change: cidReturn.filter(procesed => procesed[1] != 0)};
}

