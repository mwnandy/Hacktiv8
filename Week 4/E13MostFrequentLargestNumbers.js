function sorting(arrNumber) {
  // code di sini
  var banding = 0;
  for (var i = 0; i < arrNumber.length; i++){
    for(var j=0; j<arrNumber.length; j++){
      banding = arrNumber[j]
      if (arrNumber[j-1] > arrNumber[j]){
        arrNumber[j] = arrNumber[j-1]
        arrNumber[j-1] = banding
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  var total = 0;
  for (var j=0; j<arrNumber.length; j++){
    if (arrNumber[j] === arrNumber[arrNumber.length-1]){
      total +=1;
    }
  }
  return total;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  if (listSort[listSort.length-1] === undefined){
    return '';
  }
  else{
  return ' angka paling besar adalah '+ listSort[listSort.length-1] + ' dan jumlah kemunculan sebanyak ' +countHighest+ ' kali';
  }
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));