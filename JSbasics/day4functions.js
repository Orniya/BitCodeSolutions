function factorial(n){ //5
    let result = 1;  
    for(let i =2; i<=n; i++){ 
        result*=i; 
    }
    return result;

}

console.log(factorial(5));

// n: the parameter and the num that we chose
// i: 2 upto n
// result: * of i's upto n