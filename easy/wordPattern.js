var wordPattern = function (pattern, s) {
  let words = s.split(" ");
  let result1 = {};
  let result2 = {};
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (result1[pattern[i]]) {
      if (result1[pattern[i]] === words[i]) {
      } else {
        return false;
      }
    } else {
      result1[pattern[i]] = words[i];
    }

    if (result2[words[i]]) {
      if (result2[words[i]] === pattern[i]) {
      } else {
        return false;
      }
    } else {
      result2[words[i]] = pattern[i];
    }
  }
  return true;
};
