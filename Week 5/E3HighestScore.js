/*
Logic Challenge: Highest Score
Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:
*/

function highestScore (students) {
  // Code disini
  var nilaiTertinggi = [];
  var nilaiRata = 0;
  var totalNilai =0;
  var jumlah =0;

  for (var j=0; j<students.length; j++){
    jumlah +=students[j].score;
    totalNilai = j+1;
  }

  for (var i=0; i<students.length; i++){
    // console.log(jumlah)
    nilaiRata = jumlah / totalNilai;
    if (students[i].score > nilaiRata){
      nilaiTertinggi.push({'name':students[i].name, 'score':students[i].score})
    }
  }
  return nilaiTertinggi;
  // console.log(totalNilai)
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


// console.log(highestScore([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


// console.log(highestScore([])); //{}