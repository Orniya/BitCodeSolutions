function replaceElements(arr) {
    let rightMax = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = rightMax;
        rightMax = Math.max(rightMax, current);
    }

    return arr;
}

// Test
let arr = [2, 4, 5, 3, 1, 2];

console.log(replaceElements(arr));