function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var arrMultiplier3 = [];
    var arrEven = [];
    var arrOdd = [];
    while(arr.length !== 0){ // loop untill arr empty
        var x = 0; // always check on index 0
        if(arr[x]%3 === 0){ // check if its 3 multiplier
            arrMultiplier3.push(arr[x]);
            arr.splice(x,1); // if conditions met, move/cut value to the designated array
        }
        else if(arr[x]%2 === 0){ // check if even
            arrEven.push(arr[x]);
            arr.splice(x,1) // if conditions met, move/cut value to the designated array
        }
        else{
            arrOdd.push(arr[x]); // check if odd
            arr.splice(x,1) // if conditions met, move/cut value to the designated array
        }
    }
    var arrResult = [arrEven, arrOdd, arrMultiplier3];
    return arrResult;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]