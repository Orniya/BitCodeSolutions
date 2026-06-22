ar = [ 10001010010, 2829029292, 2802829830, 9820937268 ]

function aVeryBigSum(ar) {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum;

}


console.log(aVeryBigSum(ar));