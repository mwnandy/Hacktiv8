/* Logic Challenge - X dan O
Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak. */

function xo(str) {
  // you can only write your code here!
  
  var tampungX = 0;
  var tampungO = 0;
  
  for (var i= str.length -1; i >= 0; i--){
    
    if (str[i] === 'x'){
      tampungX += 1;
    } 
    else if (str[i] === 'o'){
      tampungO += 1;
    }
  }
  
  if (tampungX === tampungO){
    return true
  } 
  else {
    return false
  }
  
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

