var singleNumber = function (nums) {
  let count = {};

  nums.forEach((num) => {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  });
  for (let key in count) {
    if (count[key] === 1) {
      return Number(key);
    }
  }
  
};
