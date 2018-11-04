function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var hitung = 0;
  var perbandingan ='';
  for (var i=arr.length-1; i>=0; i--){
    hitung = arr[i]-arr[0]
    perbandingan = arr[i-1]
    if(hitung === perbandingan){
      return true;
    }
      else {
        return false;
      }
  }
  //return hitung;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
