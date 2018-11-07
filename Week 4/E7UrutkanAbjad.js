/* 
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/

function urutkanAbjad(str) {
  // you can only write your code here!
  var bandingAbjad = '';
  var buatArr = [];

  for (var a=0; a<str.length; a++){
    buatArr.push(str[a])
  }

  for(var i=0; i<buatArr.length; i++){
    for (var j=0; j<buatArr.length; j++){
      bandingAbjad = buatArr[j]
      if (buatArr[j - 1] > buatArr[j]) {
        buatArr[j] = buatArr[j-1]
        buatArr[j-1] = bandingAbjad
      }
    }
  }

  var hasil ='';
  for (var b=0; b<buatArr.length; b++){
    hasil += buatArr[b]
  }

  //return str;
  //console.log(buatArr)
  return hasil;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'


console.log('a' < 'b')
console.log('b' < 'a')