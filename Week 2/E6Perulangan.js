/* Looping */

// 1. Melakukan Looping Menggunakan While
var flag = 2;
var deret = 2;
var flag2 = 20;

console.log('LOOPING PERTAMA');
while(flag <= 20) {
  console.log(flag + ' - I love coding');
  flag +=deret;
}

console.log('LOOPING KEDUA');
while(flag2 >= 2) {
  console.log(flag2 + ' - I will become fullstack developer');
  flag2 -=deret;
}

================================================================================

// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for(var deret = 1; deret <= 20; deret ++) {
  console.log(deret + ' - I Love Coding ');
}

console.log('LOOPING KE DUA')
for(var deret = 20; deret >= 1; deret --) {
  console.log(deret + ' - I will become fullstack developer ');
}

================================================================================

// 3. Angka Ganjil dan Genap
// 1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1

for(var deret = 1; deret <= 100; deret ++){
  console.log(deret)
}

// 2. Di dalam perulangan, periksa setiap angka counter:
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

for(var deret = 1; deret <= 100; deret ++) {
    if((deret%2) == 0){
      console.log(deret + ' GENAP');
    }
    else{
      console.log(deret + ' GANJIL');
    }
    
  }

// 3. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
//Petambahan 2
for (var i = 1; i <= 100; i+= 2){
  console.log(i);
}

//Petambahan 5
for (var i = 1; i <= 100; i+= 5){
  console.log(i);
}

//Petambahan 9
for (var i = 1; i <= 100; i+= 6){
  console.log(i);
}

// 4. Pada 3 perulangan baru ini periksa setiap angka counter:
// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3" dan seterusnya.

// kelipatan 3 dengan pertambahan 2 :
for (var i = 1; i <= 100; i+= 2){
  if(i%3 === 0){
    console.log(i + ' KELIPATAN 3');
  }
  else{
    console.log(i);
  }
}
// kelipatan 6 dengan pertambahan 5 :
for (var i = 1; i <= 100; i+= 5){
  if(i%6 === 0){
    console.log(i + ' KELIPATAN 6');
  }
  else{
    console.log(i);
  }
}
// kelipatan 10 dengan pertambahan 9
for (var i = 1; i <= 100; i+= 9){
  if(i%10 === 0){
    console.log(i + ' KELIPATAN 10');
  }
  else{
    console.log(i);
  }
}


// iseng salah
// var i = 2;
  // var j = 0;
  // while(j < 90) {
  //   j += i; 
  //   i++; 
  //   console.log(j)
  // }