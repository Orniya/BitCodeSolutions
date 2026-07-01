function removeElement(nums, val) {
    let write = 0;

    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== val) {
            nums[write] = nums[read];
            write++;
        }
    }

    return write;
}

// Test
let nums = [3, 2, 2, 3];
let val = 3;

let k = removeElement(nums, val);

console.log("k =", k);
console.log("nums =", nums.slice(0, k));