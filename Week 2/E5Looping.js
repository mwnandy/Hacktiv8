// 1. Menyusun Barisan Bintang
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

var rows1 = 5;

for(var i = 1; i <= rows1; i++) {
  console.log("*");
}

==================================================================================================

// 2. Menyusun Barisan Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
var rows2 =5;

for(var i = 1; i <= rows2; i++) {
  var output = '';
    for(var j = 1; j <= rows2; j++) {
    output += '*';
  }
  console.log(output);
}

==================================================================================================

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
var rows3 = 5;

for(var i = 1; i <= rows3; i++) {
  var output = '';
  for(var j = 1; j <= i; j++) {
    output += '*';
  }
  console.log(output);
}