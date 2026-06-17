
function vowelsAndConsonants(s) {
     
    
    const v = ["a","e", "i", "o", "u"]
    
    for(let char of s){
        if(v.includes(char)){ // in 
            console.log(char)
        }
    }
    
    for(let char of s){
        if(!v.includes(char)){
            console.log(char);
        }
    }
}
vowelsAndConsonants("javascriptloops");

// s string
// v array of vowels
// char each char in the string