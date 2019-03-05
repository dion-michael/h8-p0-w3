function targetTerdekat(arr) {
    // you can only write your code here!
    var indexX = [];
    var oPosition = 0;
    for(var x=0; x<arr.length; x++){ // get x & o position
        if(arr[x] === 'x'){
            indexX.push(x);
        }
        else if(arr[x] === 'o'){
            oPosition = x;
        }
    }
    if(indexX.length === 0){
        return 0;
    }
    var gap = indexX[0] - oPosition;
    if(gap<0){
        gap = Math.abs(gap);
    }
    for(var x=0; x<indexX.length; x++){
        var currentGap = indexX[x] - oPosition;
        if(currentGap<0){
            currentGap = Math.abs(currentGap);
        }
        if(currentGap<gap){
            gap = currentGap;
        }
    }
    return gap;

    /*
    while(arr[x] === ' '){ //cari elemen yg bukan spasi
        x++
        console.log(x)
    }
    var count = 0;
    if(arr[x] === 'o'){

    }
    else if(arr[x] === 'x'){

    }*/

    
  }
  
  // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2