/*
Logic Challenge: Melee Ranged Grouping
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
  var hasil = [];
  var ranged = [];
  var melee = [];
  var arrStr = str.split(',')
  // console.log(str)

  if (str === '') {
    return [];
  }

  else {
    for (var i = 0; i < arrStr.length; i++) {
      var isRanged = false
      for (var j = 0; j < arrStr[i].length; j++) {
        if (arrStr[i][j] === '-' && arrStr[i][j + 1] === 'R') {
          isRanged = true;
          // console.log(isRanged)
        }
      }
      if (isRanged === false) {
        var hero = arrStr[i].split('-')
        melee.push(hero[0])
        // console.log(Ranged)
      }
      else if (isRanged === true) {
        var hero = arrStr[i].split('-')
        ranged.push(hero[0])
        // console.log(melee)
      }
    }
    hasil.push(ranged, melee)
    return hasil
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []