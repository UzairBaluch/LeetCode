var intersection = function(nums1, nums2) {
    let newset =  new  Set(nums1)
    let result = []
   nums2.forEach(e => {
    if (newset.has(e)) {
        result.push(e)
    }
   });
   return [...new Set(result)]
};