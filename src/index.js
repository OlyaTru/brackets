module.exports = function check(str, bracketsConfig) {
  let objBrackets = {};
  let checkArr = [];
  let strToArr = str.split('');
  for (let i = 0; i < bracketsConfig.length; i++) {
    objBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for (let i = 0; i < strToArr.length; i++) {
    if((strToArr[i] in objBrackets) && (objBrackets[strToArr[i]] === strToArr[i])) {
      if(checkArr.includes(strToArr[i])) {
        if(checkArr.at(-1) === strToArr[i]) {
          checkArr.pop();
          continue;
        } else {
          return false;
        }
      } else {
        checkArr.push(strToArr[i]);
        continue;
      }
    }
    if (strToArr[i] in objBrackets) {
      checkArr.push(strToArr[i]);
    } else {
      if (objBrackets[checkArr[checkArr.length - 1]] === strToArr[i]) {
        checkArr.pop();
      } else {
        return false;
      }
    }
  }
  return (checkArr.length === 0);
}
