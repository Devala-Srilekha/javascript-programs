function revString(str) {
var arrayToString = str.split('');
    var reverseArray = arrayToString.reverse();
    var reverseString = arrayToString.join('');
    return reverseString;
    }
  console.log(revString('car'));
  console.log(revString('bar'));