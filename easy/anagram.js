var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let countS = {};
  for (let i = 0; i < s.length; i++) {
    if (countS[s[i]]) {
      countS[s[i]]++;
    } else {
      countS[s[i]] = 1;
    }
  }
  let countT = {};
  for (let i = 0; i < t.length; i++) {
    if (countT[t[i]]) {
      countT[t[i]]++;
    } else {
      countT[t[i]] = 1;
    }
  }
  for (let char in countS) {
    if (countS[char] !== countT[char]) {
      return false;
    }
  }
  return true;
};
