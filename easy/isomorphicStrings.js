var isIsomorphic = function (s, t) {
  let result = {};
  let result2 = {};
  for (let i = 0; i < s.length; i++) {
    if (result[s[i]]) {
      if (result[s[i]] === t[i]) {
      } else {
        return false;
      }
    } else {
      result[s[i]] = t[i];
    }

    if (result2[t[i]]) {
      if (result2[t[i]] === s[i]) {
      } else {
        return false;
      }
    } else {
      result2[t[i]] = s[i];
    }
  }

  return true;
};
