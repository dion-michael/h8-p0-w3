function cariMean(arr) {
    var sum = 0;
    for(var x=0; x<arr.length; x++){
        sum = sum + arr[x];
    }
    return Math.round(sum/arr.length); // untuk bulatkan keatas pake Math.ceil
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2 
  console.log(cariMean([7, 7, 7, 7, 7])); // 7

// untuk array yg 1, 3, 3 --->
/* " Kita perlu kemudian melakukan pembulatan angka 
   dari hasil mean yang didapatkan (pembulatan ke atas) "
   (1 + 3 + 3)/3 = 2.333 bulatkan keatas = 3 
   di test cases expected ouputnya = 2 */ 