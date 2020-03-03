function nameSwap(str) {
 var arrayToString = str.split(' ');
     var reverseArray = arrayToString.reverse();
      var reverseString = arrayToString.join(' ');
     return reverseString;
    }
  console.log(nameSwap('Abraham Lincoln'));
  console.log(nameSwap('Hank Aaron'));