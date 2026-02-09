var findDisappearedNumbers = function (nums) {
  let newSet = new Set(nums);

  let result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!newSet.has(i)) {
      result.push(i);
    }
  }

  return result;
};
