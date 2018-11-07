var objCup = {
  height: 13,
  colour: 'black',
  dimension: 500,
}

// // Tambah meterial adalah metal
// objCup.material = 'metal'

// // Tambahkan jumlah stock senilai 13
// objCup ['jumlah stock'] = '13'
// objCup ['jumlah stock'] -= 1


// console.log(objCup)


/*
height is 13
colour is black
dimension is 500
*/

var keys = Object.keys(objCup);
//console.log(keys)
// for (let i=0; i<keys.length; i++){
//   console.log(keys[i]+ ' is '+objCup[keys[i]])
// }

/*
height is 13
colour is black, white
dimension is 500
*/

for (let i=0; i<keys.length; i++){
  if (Array.isArray(objCup[keys[i]])){
    objCup[keys[i]] = objCup[keys[i].join(', ')]
  }
  console.log(keys[i]+ ' is '+objCup[keys[i]])
}