function tentukanDeretAritmatika(arr) {
    var gap = arr[1] - arr[0]; // the pattern is always at the first 2 numbers
    var isTrue = true; // set flag
    for(var x=1; x<arr.length-1; x++){ // x=1 to skip pattern 0 to 1, start with gap from 1 to 2
        var nextGap = 0; // reset the gap
        nextGap = arr[x+1] - arr[x]; // check the next gap
        if(gap !== nextGap){ // check the consistency of the gap
            isTrue = false; // set to false if the pattern is broken
        }
    }
    return isTrue;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false