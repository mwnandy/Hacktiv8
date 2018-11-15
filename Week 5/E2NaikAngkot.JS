/*
Logic Challenge - Naik Angkot
Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var start=0;
  var tujuan =0;
  var harga = 1;
  var angkot = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    angkot.push({ 'penumpang': arrPenumpang[i][0], 'naikDari': arrPenumpang[i][1], 'tujuan': arrPenumpang[i][2], 'bayar': 0 })

    for (var j = 0; j < rute.length; j++) {
      if(rute[j] === arrPenumpang[i][1]){
        start = j;
        // console.log(start)
      }
      else if (rute[j] === arrPenumpang[i][2]){
        tujuan =j;
        // console.log(tujuan)
      }
    }
    harga = (tujuan - start) * 2000
    angkot[i].bayar = harga
  }
  return angkot
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]