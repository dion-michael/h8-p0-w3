function angkaPalindrome(num) {
    // you can only write your code here!
    if(isPalindrome(num)){ // if num is already palindrome, add number by 1
        num = num + 1
    }
    while(!isPalindrome(num)){ // increment num by 1 untill it gets a palindrome number
        num = num + 1;
    }
    return num; // voila!
  }

  function isPalindrome(num){ // function to check whether a number is palindrome or not
    var reverse = ''
    var numString = num.toString();
    var numLength = numString.length;
    for(var x=numLength-1; x>=0; x--){
        reverse = reverse + numString[x];
    }
    if(reverse === numString){
        return true;
    }
    else{
        return false;
    }
  }
  // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(3428374));