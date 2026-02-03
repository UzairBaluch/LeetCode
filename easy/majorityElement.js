var majorityElement = function (nums) {
  let obj = {};
  nums.forEach((e) => {
    if (obj[e]) {
      obj[e]++;
    } else {
      obj[e] = 1;
    }
  });

  for (const key in obj) {
    if (obj[key] > nums.length / 2) {
      return Number(key);
    }
  }
};
