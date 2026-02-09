var longestPalindrome = function (s) {
  let count = {};

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]]++;
    } else {
      count[s[i]] = 1;
    }
  }

  let length = 0;

  for (let char in count) {
    if (count[char] % 2 === 0) {
      length += count[char];
    } else {
      length += count[char] - 1;
    }
  }

  if (length < s.length) {
    length += 1;
  }

  return length;
};
