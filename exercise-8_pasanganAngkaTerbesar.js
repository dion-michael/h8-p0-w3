function pasanganTerbesar(num) {
    var input = num.toString();
    if(input.length<2){ // check if input < 2, returns an error
        return 'input must > 2 digits'
    }
    var largest = input[0] + input[1]; // set the largest to the first pair
    for(var x=1; x<input.length-1; x++){ // x=1 to skip checking first pair
        var couple = input[x] + input[x+1] // get the next pair
        if(parseInt(largest) < parseInt(couple)){ // check which one is bigger number
            largest = couple; // set the largest number to next pair of number if its bigger
        }
    }
    return parseInt(largest); // parse int to return as number, not string
  }

  
  // TEST CASES
  console.log(pasanganTerbesar(1));
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99