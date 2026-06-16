let nums = [2, 6,6,5,3]

function getSecondLargest(nums) {
    let unique = [...new Set(nums)];
    unique.sort((a, b) => b - a);
    return unique[1];
}

console.log(getSecondLargest(nums));