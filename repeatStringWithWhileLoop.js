 function repeatString(str, num) {
      var finalString = '';
      if (num <= 0) {
        return finalStr;
      }
      while (num > 0) {
        finalString += str;
        num--;
      }
      return finalString;
    }
    console.log(repeatString('car', 4));
    console.log(repeatString('bar', 3));