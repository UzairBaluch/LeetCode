var isHappy = function (n) {
  let seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) return false;
    seen.add(n);

    n = n
      .toString()
      .split("")
      .reduce((acc, digit) => acc + digit ** 2, 0);
  }

  return true;
};
