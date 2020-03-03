function alphaOrder(str) {

    // step 1 -> split the string into an array
    var strToArr = str.split('');

    // step 2 -> sort the letters in the array
    var revArr = strToArr.sort();

    // step 3 -> join the array back into a string
    var sortedStr = revArr.join('');

    // step 4 -> return the alphabetized array
    return sortedStr;

    // all in one step
    return str.split('').sort().join('');

  }

  console.log(alphaOrder("hello"));
  console.log(alphaOrder("goodbye"));