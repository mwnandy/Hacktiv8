function shoppingTime(memberId, money) {
  // you can only write your code here!
  var produk = [['Sepatu Stacattu', 1500000], ['Baju Zoro', 500000], ['Baju H&N', 250000],
  ['Sweater Uniklooh', 175000], ['Casing Handphone', 50000]];

  if (memberId === '' || memberId === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }

  else if (money < produk[4][1]){
      return 'Mohon maaf, uang tidak cukup'
    }


  var objek = {};
  var sisa = 0;
  var masuk = [];
  objek.memberId = memberId;
  objek.money = money;
  for (var i = 0; i < produk.length; i++) {
    sisa = money - produk[i][1];
    if (money >= produk[i][1]) {
      masuk.push(produk[i][0])
      objek.listPurchased = masuk;
      money = sisa;
      objek.changeMoney = money;
    }
    
    //console.log(sisa)
  }
  return objek;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }

console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja