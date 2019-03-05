
//============== METHOD 1 ===================

function balikString(str){
    var reverse = ''
    for(var x=str.length-1; x>=0; x--){
        reverse = reverse + str[x];
    }
    return reverse;
}
console.log(balikString('balikString'));

//============== METHOD 2 ===================

function balikString2(str){
    if(str.length == 0){
        return '';
    }
    return str.substr(str.length-1,1) + balikString2(str.substr(0, str.length-1));
}
console.log(balikString2('balikString'));
console.log(balikString('balikString'));
