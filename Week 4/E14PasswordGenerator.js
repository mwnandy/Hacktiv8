function changeVocals(str) {
    //code di sini
    var vocal = [
        ['a', 'b'],
        ['e', 'f'],
        ['i', 'j'],
        ['o', 'p'],
        ['u', 'v'],
        ['A', 'B'],
        ['E', 'F'],
        ['I', 'J'],
        ['O', 'P'],
        ['U', 'V'],
    ];

    var gantiVocal = '';
    var tidakKetemu = false;
    for (var a = 0; a < str.length; a++) {
        for (var b = 0; b < vocal.length; b++) {
            if (str[a] === vocal[b][0]) {
                gantiVocal += vocal[b][1]
                tidakKetemu = true;
            }
        }

        if (!tidakKetemu) {
            gantiVocal += str[a]
        }
        tidakKetemu = false;
    }
    return gantiVocal;
}

function reverseWord(str) {
    //code di sini
    var balikKata = '';
    for (var k = str.length - 1; k >= 0; k--) {
        balikKata += str[k]
    }
    return balikKata;
}

function setLowerUpperCase(str) {
    //code di sini
    var jadiBesar = '';
    var jadiKecil = '';
    var kecilBesar = '';
    for (var l = 0; l < str.length; l++) {
        jadiBesar = str[l].toUpperCase();
        jadiKecil = str[l].toLowerCase();
        if (str[l] === jadiBesar) {
            kecilBesar += jadiKecil;
        }
        else if (str[l] === jadiKecil) {
            kecilBesar += jadiBesar;
        }
        else {
            kecilBesar += str[l];
        }
    }
    return kecilBesar;
}

function removeSpaces(str) {
    //code di sini
    var spasiHilang = '';
    for (var s = 0; s < str.length; s++) {
        if (str[s] !== ' ') {
            spasiHilang += str[s];
        }
    }
    return spasiHilang;
}

function passwordGenerator(name) {
    //code di sini
    var gantiVocal = changeVocals(name);
    var balikKata = reverseWord(gantiVocal);
    var kecilBesar = setLowerUpperCase(balikKata);
    var spasiHilang = removeSpaces(kecilBesar);
    if (spasiHilang.length <= 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    else {
        return spasiHilang;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'