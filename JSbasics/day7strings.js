// Given a string containing words separated by spaces, replace every space with a hyphen (-) and return the new string.

// function splitAndJoin(line) {
//     return line.split(" ").join("-");
// }

// let line = "this is a string";

// console.log(splitAndJoin(line));


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