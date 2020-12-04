function checkCashRegister(price, cash, cid) {
    let difference = cash - price; 
    difference = parseFloat(difference.toFixed(2)) 
    let change = [];
    
     function divide(targetDollarTotal, coinTotal, denominator){
       let denominatorName = denominator;
          switch(denominator){
            case "PENNY": denominator = 0.01;
            break;
            case "NICKEL": denominator = 0.05;
            break;
            case "DIME": denominator = 0.1;
            break;
            case "QUARTER": denominator = .25;
            break;
            case "ONE": denominator = 1;
            break;
            case "FIVE": denominator = 5;
            break;
            case "TEN": denominator = 10;
            break;
            case "TWENTY": denominator = 20;
            break;
            case "ONE HUNDRED": denominator = 100;
            break;
          }
       let numberOfCoinsUsed = 0;
       let remainderOfTotal = targetDollarTotal; 
       let ammountSpent = 0;
       console.log(remainderOfTotal - denominator)
       while(coinTotal > 0 && remainderOfTotal-denominator >= 0){
         console.log('made it', remainderOfTotal-denominator)
         numberOfCoinsUsed++;
         remainderOfTotal -=denominator;
         coinTotal -= denominator;
         ammountSpent += denominator;
  
       }
      return {numberOfCoinsUsed, ammountSpent, remainderOfTotal, coinTotal, denominatorName}
     }
    for(let i = cid.length -1; i > 0; i--){
      let obj = divide(difference, cid[i][1], cid[i][0])
      difference = obj.remainderOfTotal;
      if(obj.numberOfCoinsUsed > 0){
        change.push([obj.denominatorName, obj.ammountSpent])
      }
    }
  
    
    return change;
  }
  console.log(checkCashRegister(19.70, 20, [["PENNY", 0.01], ["NICKEL", 1], ["DIME", 0], ["QUARTER", 1], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  
  
  /*
  **Problem Domain:
  given:
  price of item
  cash given
  cash available
  return an array with change given sorted like this:
  {change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  
  subtract price of item from cash given
  {if remainder is negative return 'feed me cash seymor FEED ME'}
  {if remainder is 0 return  open and cash in drawer}
  else provide change: starting with highest to lowest 
  }
  
  provide change:
  let difference = cash - price;
  if(currentCoin < difference){
    difference = currentCoin % difference;
  }
  */