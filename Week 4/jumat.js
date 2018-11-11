/*
function factorialRec(num){
  // 408 = 4 + 0 + 8 = 12
// 12 = 1 + 2 = 3
// paskai while
  while(num > 9){
    var numStr = String(num);
    num = 0;
    for (var i = 0; i<numStr.length; i++){
      num += Number(numStr[i])
    }
  }
  return num
}
console.log(factorialRec(408))
*/

function tambahTrusRec(num){
  if (num < 10){
    return num;
  }
  else {
    var numStr = String(num);
    num = 0;
    for (var i = 0; i<numStr.length; i++){
      num += Number(numStr[i])
    }
    return tambahTrusRec(num)
  }
}
console.log(tambahTrusRec(408))