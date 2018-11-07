/*
Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
*/

function fpb(angka1, angka2) {
  // you can only write your code here!
  var jumAngka1 = [];
  var jumAngka2 = [];
  for (var i=1; i<angka1; i++){
    if(angka1 % i === 0){
      jumAngka1.push(i);
    }
  }
  
  for (var j=1; j<angka2; j++){
    if(angka2 % j === 0){
      jumAngka2.push(j)
    }
  }

  var hasil = [];
  for (var a=0; a<jumAngka1.length; a++){
    for (var b=0; b<jumAngka2.length; b++){
      if(jumAngka1[a] === jumAngka2[b]){
        hasil.push(jumAngka1[a])
      }
    }
  }

  // console.log(jumAngka1)
  // console.log(jumAngka2)
  // console.log(hasil)
  return hasil[hasil.length-1]
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1