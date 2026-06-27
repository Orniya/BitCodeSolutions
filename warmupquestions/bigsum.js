ar = [ 10001010010, 2829029292, 2802829830, 9820937268 ]

function aVeryBigSum(ar) {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum;

}


console.log(aVeryBigSum(ar));






// matters for languages that needs to be declared with a type, like c++ and java: specific
// js or python: not specific, so it takes and it doesn't classify
// int 32 bits: 2,147,483,647
// long 64 bits