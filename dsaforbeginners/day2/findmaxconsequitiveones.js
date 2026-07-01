let nums = [1,4,3,2,7,8,9,9,5,4,3]

function findMaxConsecutiveOnes(nums) {
    let current = 0;
    let max = 0;

    for (let num of nums) {
        if (num === 1) {
            current++;
            max = Math.max(max, current);
        } else {
            current = 0;
        }
    }

    return max;
}

console.log(findMaxConsecutiveOnes(nums))