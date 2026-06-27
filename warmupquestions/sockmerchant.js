let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = 9;

function sockMerchant(n, ar) {
    let count = {};
    let pairs = 0;

    // Count each color
    for (let sock of ar) {
        count[sock] = (count[sock] || 0) + 1;
    }

    // Count pairs
    for (let color in count) {
        pairs += Math.floor(count[color] / 2);
    }

    return pairs;
}

console.log(sockMerchant(n, ar));