function getConcatenation(nums) {
    let n = nums.length;
    let ans = new Array(2 * n);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }

    return ans;
}

// Test 1
let nums1 = [1, 4, 1, 2];
console.log(getConcatenation(nums1));

// Test 2
let nums2 = [22, 21, 20, 1];
console.log(getConcatenation(nums2));