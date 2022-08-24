//=== FUNCTION DEFINITION 


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {total of the given numbers}
 * @note CANT CALL BEFORE INITIALIZATION
 */
let sum = function (a, b) {
    return a + b;
};
console.log("Sum of two number is: ", sum(2, 3));

/**
 * ARROW FUNCTION
 * @param {number} a 
 * @param {number} b 
 * @returns {multiplication of total number}
 * @note CANT CALL BEFORE INITIALIZATION
 */
let multiplication = (a, b) => {
    return a + b;
};
console.log("Multiplication of two numbers: ", multiplication(3, 4));

/**
 * Declaration notation
 * @param {number} a 
 * @param {number} b 
 * @returns {difference between given numbers}
 * @note CAN BE CALL AT ANY PLACE (it doesn't maintain topdown method,)
 */
console.log("Subtraction of two numbers: ", subtraction(5, 3))
function subtraction(a, b) {
    return a - b;
}


//=== chapter 3 functions
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {returns minimum between given numbers}
 */
function min(a, b) {
    if (a < b) return a;
    else return b;
}
console.log("Minimum number is: ", min(0, -10));

/**
 * 
 * @param {string} string 
 * @returns {how many B in the string}
 */
function countBs(string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") counter += 1;
    }
    return counter;
}

/**
 * 
 * @param {stgin} string 
 * @param {char} char 
 * @returns {how many given character in the given string}
 */
function countChar(string, char) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) counter += 1;
    }
    return counter;
}

console.log("Total B in the string: ", countBs("BBC"));
// → 2
console.log("Total K in the string: ", countChar("kakkerlak", "k"));
// → 4

/**
 * JSON
 */
const jsonObject = {
    "property1":"value1",
    "property2":"value2",
    "property3":["v1","v2","v3"]
}
//--- JSON to string
let jsonToString = JSON.stringify(jsonObject);
console.log("json to string: ", jsonToString);

let stringToJson = JSON.parse(jsonToString);
console.log("string to json: ", stringToJson);
