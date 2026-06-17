let nums = [2, 6,6,5,3]

// function getSecondLargest(nums) {
//     let unique = [...new Set(nums)];
//     unique.sort((a, b) => b - a);
//     return unique[1];
// }

// console.log(getSecondLargest(nums));


function getSecondLargest(nums) {
    let max = null;
    let secondMax = null;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        // first number OR new max
        if (max === null || num > max) {
            secondMax = max; // null 2
            max = num;  // 2 6
        }

        // between max and secondMax (and not equal to max)
        else if (num !== max && (secondMax === null || num > secondMax)) {
            secondMax = num; //5
        }
    }

    return secondMax;
}

console.log(getSecondLargest(nums));


