function checkAB(num) {
  // you can only write your code here!
  var tampung1 = '';
  var tampung2 = 0;
  for (var i=0; i<num.length; i++){
    if(num[i] === 'a'){
      tampung1 = i;
    }
    else if (num[i] === 'b'){
      tampung2 = i;
    }
  }
  // console.log(tampung1)
  // console.log(tampung2)
  return tampung1 - tampung2 === 4 || tampung2 - tampung1 === 4
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false