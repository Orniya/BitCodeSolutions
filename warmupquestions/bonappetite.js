
let bill = [3, 10, 2, 9] // index of food prices
let k = 1 // the index of the food ana didn't eat
let b = 10 // what brian calculated

function bonAppetit(bill, k, b) {
    let total = 0;

    
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            total += bill[i];
        }
    }

    
    let actualShare = total / 2;

    
    if (actualShare === b) {
        console.log("Bon Appetit");
    } else {
        console.log("brian ows ana " + (b - actualShare) + " dollars");
    }
}
bonAppetit(bill, k, b);