function cariMedian(arr) {
  // you can only write your code here!
  // var tampung1 = [];
  for (var i = 0; i < arr.length; i++) {
    
    for (var j = 0; j < arr.length; j++) {
      var bandingan = arr[j]
      if (arr[j - 1] > arr[j]) {
        arr[j] = arr[j-1]
        arr[j-1] = bandingan
      }
    }
  }
  return arr
}

// TEST CASES
console.log(cariMedian([3, 10, 4, 7, 6])); // 7
