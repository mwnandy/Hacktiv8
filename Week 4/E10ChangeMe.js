function changeMe(arr) {
  var fullName = '';
  var objPerson = {};
  var no = 0;
  for(var i=0; i<arr.length; i++){
    no++
    fullName = arr[i][0]+ ' ' +arr[i][1];
    objPerson.firstName = arr[i][0];
    objPerson.lastName = arr[i][1];
    objPerson.gender = arr[i][2];
    objPerson.age = 2018 - arr[i][3];
    if (arr[i][3] === undefined){
      objPerson.age = 'Invalid Birth Year';
    }
    console.log(no+ ' ' +fullName+':')
    console.log(objPerson)
    console.log('\n')
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""