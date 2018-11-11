function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (angka < 10) {
        return angka;
    } else {
        var angkaStr = angka.toString();
        var angkaPengali = 1;
        for (var i = 0; i < angkaStr.length; i++) {
            angkaPengali *= Number(angkaStr[i]);
        }
        return kaliTerusRekursif(angkaPengali);
    }

}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6