function perkalianUnik(arr) {
    // you can only write your code here!
    var resultArr = [];
    for(var x=0; x<arr.length; x++){
        var multiply = 1;
        for(var y=0; y<arr.length; y++){
            if(x !== y){ // yang dibandingkan indexnya, not its value
                multiply = multiply * arr[y];
            }
        }
        resultArr.push(multiply);
    }
    return resultArr;
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]