var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

// ======================== METHOD 1 ========================

function dataHandling (arr){
    var id = getId(arr);
    var name = getName(arr);
    var birthPlace = getBirthplace(arr);
    var birthday = getBirthday(arr);
    var hobby = getHobby(arr);
    var result = '';
    for(var x=0; x<arr.length; x++){
        result = result + 'Nomor ID: ' + id[x] + '\nNama Lengkap: ' + name[x] + 
                 '\nTTL: ' + birthPlace[x] + ' ' + birthday[x] + '\nHobi: ' + hobby[x];
        if(x !== arr.length-1){
            result = result + '\n\n'
        }   
    }
    return result;
}

function getId(arr){
    var id = [];
    for(var x=0; x<arr.length; x++ ){
        id.push(arr[x][0]);
    }
    return id;
}

function getName(arr){
    var name = [];
    for(var x=0; x<arr.length; x++ ){
        name.push(arr[x][1]);
    }
    return name;
}

function getBirthplace(arr){
    var birthPlace = [];
    for(var x=0; x<arr.length; x++ ){
        birthPlace.push(arr[x][2]);
    }
    return birthPlace;
}

function getBirthday(arr){
    var birthday = [];
    for(var x=0; x<arr.length; x++ ){
        birthday.push(arr[x][3]);
    }
    return birthday;
}

function getHobby(arr){
    var hobby = [];
    for(var x=0; x<arr.length; x++ ){
        hobby.push(arr[x][4]);
    }
    return hobby;
}

//console.log(dataHandling(input));

// ======================== METHOD 2 ========================

function dataHandling2(arr){
    var arrFormat = ['id', 'name', 'birthplace', 'birthday', 'hobby'];
    var id = arrFormat.indexOf('id'); // or var id = 0;
    var name = arrFormat.indexOf('name'); // or var name = 1;
    var birthplace = arrFormat.indexOf('birthplace'); // or var birthplace = 2;
    var birthday = arrFormat.indexOf('birthday'); // or var birthday = 3;
    var hobby = arrFormat.indexOf('hobby'); // or var hobby = 4;
    var result = '';
    for(var x=0; x<arr.length; x++){
        result = result + 'Nomor ID: ' + arr[x][id] + '\nNama Lengkap: ' + arr[x][name] +
                 '\nTTL: ' + arr[x][birthplace] + ' ' + arr[x][birthday] +
                 '\nHobi: ' + arr[x][hobby]
        if(x !== arr.length-1){
            result = result + '\n\n';
        }
    }
    return result;
}

console.log(dataHandling2(input));