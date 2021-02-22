module.exports = function check(str, bracketsConfig) {
  // your solution
let arr = str.split('');

  for (i = 1; i < arr.length; i++) { 
    for (j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][1] && arr[i-1] == bracketsConfig[j][0]) {
        arr.splice(i-1, 2);
        i-=2;
      }
    }
  }
  if (arr.length > 0) return false;
    else return true;
}
