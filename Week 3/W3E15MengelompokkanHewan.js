function groupAnimals(animals) {
  var animalC =[];
  var animalA =[];
  var animalK =[];
  var animalU =[];
  //var animalKosong =[];
  var gabungAnimals =[];
  for (var i=0; i<animals.length; i++){
    if (animals[i][0] === 'c'){
      animalC.push(animals[i]);
    }
      else if(animals[i][0] === 'a'){
        animalA.push(animals[i]);
      }
        else if(animals[i][0] === 'k' && animals[i][1] === 'u'){
          animalK.push(animals[i]);
        }
        else if (animals[i][0] === 'u'){
          animalU.push(animals[i]);
        }
  }
  // console.log(animalC)
  // console.log(animalA)
  // console.log(animalK)
  // console.log(animalU)
  var buangArray =[];
  gabungAnimals.push(animalA)
  gabungAnimals.push(animalC)
  gabungAnimals.push(animalK)
  gabungAnimals.push(animalU)
  // console.log(gabungAnimals)
  return gabungAnimals;
  // for (var j=0; j<gabungAnimals.length; j++){  
  //   if (gabungAnimals[j] === ['']){
  //     buangArray.pop(gabungAnimals[j])
  //   }
  // }  
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]