// Given a string containing words separated by spaces, replace every space with a hyphen (-) and return the new string.

// function splitAndJoin(line) {
//     return line.split(" ").join("-");
// }

// split(" ") splits at " " and returns an array
//join("-"): glues array back together using "-" and returns a string 
let line = "this is a string";

console.log(splitAndJoin(line));


function splitAndJoin(line) {
    let result = "";

    for (let i = 0; i < line.length; i++) {
        if (line[i] === " ") {
            result += "-";
        } else {
            result += line[i];
        }
    }

    return result;
}

// 1st method: 2 iterations
// 2nd method: 1 i