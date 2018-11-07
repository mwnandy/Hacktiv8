/*
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. 
Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. 
Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
var cetak = '';
var jadiKecil = '';
var jadiBesar = '';
  for (var i=0; i<kalimat.length; i++){
    jadiBesar = kalimat[i].toUpperCase();
    jadiKecil = kalimat[i].toLowerCase();
    if (kalimat[i] === jadiBesar){
      cetak += jadiKecil;
    }
    else if (kalimat[i] === jadiKecil){
      cetak += jadiBesar;
    }
    else{
      cetak += kalimat[i];
    }
  }
  return cetak;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"