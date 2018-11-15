/*
Logic Challenge: Melee Ranged Grouping
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
  //your code here
  var ranged = [];
  var melee = [];
  var kata = str.split(",");
  // var kata2 = kata.split('-')
  if (str === ''){
    return 'array kosong';
  }
  for(var i = 0; i<kata.length; i++){
    if (kata[i][kata[i].length-1] === 'd' && kata[i][kata[i].length-2] === 'e'){
      ranged.push(kata[i])
    }
    else {
      melee.push(kata[i])
    }
  }

    console.log(ranged)
    console.log(melee)
  // console.log(kata[0][kata[0].length-1])
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []