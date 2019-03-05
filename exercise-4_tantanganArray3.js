var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(arr){
    var name = 'Roman Alamsyah Elsharawy';
    var gender = 'Pria';
    var province = 'Provinsi Bandar Lampung';
    var school = 'SMA Internasional Metro';
    arr.splice(1,2,name,province); // from position 1, remove 2 item, insert name and province
    arr.splice(4,1,gender,school); // from position 4, remove 1 item, insert gender and school
    console.log(arr); // console.log the new array
    var dateArr = arr[3].split('/'); // split date with '/' as separator
    var month = dateArr[1]; // get month from arr input
    switch(month){ // switch case to get the full name of the month
        case '01':
            month = 'Januari'
            break;
        case '02':
            month = 'Februari';
            break;
        case '03':
            month = 'Maret';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'Mei';
            break;
        case '06':
            month = 'Juni';
            break;
        case '07':
            month = 'Juli';
            break;
        case '08':
            month = 'Agustus';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'Oktober';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'Desember';
            break;
        default:
            break;
    }
    console.log(month); // display month by its full name
    var dateArrSorted = dateArr.slice(0); // creates a copy of dateArr so that it wont be affected with sorting
    dateArrSorted = dateArrSorted.sort( (a,b) => b-a ); // b-a descending order, a-b ascending order
    console.log(dateArrSorted); // log the sorted array
    console.log(dateArr.join('-')); // join the unsorted array (because the demand is to output the unsorted array ('21-05-1989'))
    var slicedName = arr[1].slice(0, 15); // slice name from arr input, from index 0 to 15 (the demand is 15 characters)
    console.log(slicedName) // log the sliced name
}

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */