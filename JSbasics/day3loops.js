
function vowelsAndConsonants(s) {
     
    
    const c = ["a","e", "i", "o", "u"]
    for(let char of s){
        if(c.includes(char)){
            console.log(char)
        }
    }
    
    for(let char of s){
        if(!c.includes(char)){
            console.log(char);
        }
    }
}
vowelsAndConsonants("javascriptloops");