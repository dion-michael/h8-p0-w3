function groupAnimals(animals) {
    // you can only write your code here!
    var result = []; // to store the result
    while (animals.length>0){ // loop untill no animals left
        var temp = []; // to store same letter index animals
        var letterIndex = animals[0][0]; // get the first letter of the animal to use as index
        for(var y=0; y<animals.length; y++){
            if(letterIndex === animals[y][0]){ // if the first letter = letter index
                temp.push(animals[y]); // push into temp
                animals.splice(y,1); // delete from animal array
                y--; // to make sure to search from same index again
            }
        }
        result.push(temp); // push temp array to result array
    }
    result.sort(); // sort the array from a to z
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]