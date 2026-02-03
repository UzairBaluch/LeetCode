let s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  let str = s.toLowerCase();
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z0-9]/)) {
      newStr += str[i];
    }
  }
  let reversed = newStr.split("").reverse().join("");
  if (newStr === reversed) {
    return true;
  }
  return false;
};
