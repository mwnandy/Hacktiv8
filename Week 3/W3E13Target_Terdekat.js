function targetTerdekat(arr) {
  // you can only write your code here!
  var masukX = [];
  //var masukO = [];
  var tampungO = 0;
  var tampungX = 0;
  var hasil = 0;

  if (arr.indexOf('x') === -1) {
    return 0
  }

  else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === 'x') {
        tampungX = i;
        masukX.push(tampungX)
      }
      else if (arr[i] === 'o') {
        tampungO = i;
        //masukO.push(tampungO)
      }
      // masukX.sort(function(a, b) {return a>b})
      // var hasil
      // hasil = masukX[0]-masukO[0]
      // hasil = Math.abs

      var target = []
      for (j = 0; j < masukX.length; j++) {
        hasil = Math.abs(tampungO - masukX[j])
        target.push(hasil)
        target.sort()
      }
    }
    // console.log(masukO)
    // console.log(masukX)
    // console.log(hasil)
    // console.log(target)
    return target[0];
  }
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2