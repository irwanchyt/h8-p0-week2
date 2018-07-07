function xo(str){

      var char1 = str.split('x');
      var char2 = str.split('o');

        if (char1.length === char2.length ) {
            return true;
        }
        else if (char1.length !== char2.length){
            return false;
        }

     }

    console.log(xo('xoxoxo')); // true
    console.log(xo('oxooxo')); // false
    console.log(xo('oxo')); // false
    console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
