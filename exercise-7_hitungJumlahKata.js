function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var inputArr = kalimat.split(' '); // split with 'space' as the separator
    return inputArr.length;
  }

  function hitungKataManual(kalimat){
      if(!kalimat.length){
          return 0;
      }
      var jumlah = 1; // the minimum amount of word
      for(var x=0; x<kalimat.length; x++){
        if(kalimat[x] === ' '){ // checks if the value is 'space'
            if(kalimat[x+1] !== ' '){ // in case of multiple 'space'
                jumlah++ // if the value next to ' ' is not a space, then its a word. thus, +1
            }
        }
      }
      return jumlah;
  }
  
  // TEST CASES
  console.log('USING ARRAY')
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

  console.log('\nMANUAL')
  console.log(hitungKataManual('I have a dream')); // 4
  console.log(hitungKataManual('Never     eat shredded wheat or cake')); // 6
  console.log(hitungKataManual('A song to sing')); // 4
  console.log(hitungKataManual('I')); // 1
  console.log(hitungKataManual('I believe I can code')); // 5