function cariMean(arr) {
    // you can only write your code here!
    arr.sort(function(b, a) { return b - a });
    for (var i = 0; i < arr.length; i++) {
    }
    //return i;
    var b = 0.5
    var hasil = (i * b) - b;
    return arr[hasil];
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7


// var a = 5;
// var b = 0.5;
// var hasil = (a * b)-b;

// console.log(hasil)