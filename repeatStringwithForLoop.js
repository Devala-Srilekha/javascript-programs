function repeatString(str, num) {
    var finalString = '';
    if (num <= 0) {
      return finalStr;
  }
    for (var i = 1; i <= num; i++) {
      finalString += str;
      console.log("value of finalString at loop", i + " " + finalString);
    }
    return finalString;
  }
  console.log(repeatString('car', 4));
  console.log(repeatString('bar', 3));