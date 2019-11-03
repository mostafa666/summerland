export default str => {
  let newStr = "",
    exists;
  if (typeof str !== String) str = String(str);
  let persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
  let englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let i = 0; i < str.length; i++) {
    exists = false;
    for (let j = 0; j < englishNumbers.length; j++) {
      if (englishNumbers[j] === str[i]) {
        newStr += persianNumbers[j];
        exists = true;
        break;
      }
    }
    if (!exists) newStr += str[i];
  }
  if (newStr === "undefined") return "";
  return newStr;
};
