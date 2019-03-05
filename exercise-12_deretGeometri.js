function tentukanDeretGeometri(arr) {
    var gap = arr[1]/arr[0]; //the pattern is always at arr[1]/arr[0]
    var isTrue = true; // set flag
    for(var x=1; x<arr.length-1; x++){ // // x=1 to skip pattern 0 to 1, start with gap from 1 to 2
        var nextGap = 0; //reset the gap
        nextGap = arr[x+1] / arr[x]; // get the next gap
        if(gap !== nextGap){ // check the consistency of the gap
            isTrue = false; // set to false if the pattern is broken
        }
    }
    return isTrue;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false