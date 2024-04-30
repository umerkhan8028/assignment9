// Q1
function roundNumber(number) {
    return Math.round(number);
}
// Example usage:
var inputNumber = 3.7;
var roundedNumber = roundNumber(inputNumber);
console.log("Rounded number:", roundedNumber);


// Q2
function generateRandomInRange(min, max) {
    // Generate a random number between 0 and 1
    var random = Math.random();
    // Scale and shift the random number to fit within the specified range
    return Math.floor(random * (max - min + 1)) + min;
}
// Example usage:
var min = 10;
var max = 20;
var randomNum = generateRandomInRange(min, max);
console.log("Random number between", min, "and", max, ":", randomNum);


// Q3
function convertToNumber(str) {
    // Attempt to parse the string as a float
    var number = parseFloat(str);
    
    // Check if the parsed number is NaN or the entire string is not a valid number
    if (isNaN(number) || !isFinite(number)) {
        return NaN;
    }
    return number;
}
// Example usage:
var str1 = "123";
var str2 = "3.14";
var str3 = "Hello";
console.log(convertToNumber(str1)); // Output: 123
console.log(convertToNumber(str2)); // Output: 3.14
console.log(convertToNumber(str3)); // Output: NaN


// Q4
function truncateDecimal(num, decimals) {
    // Calculate the multiplier to shift the decimal point to the desired position
    var multiplier = Math.pow(10, decimals);
    
    // Truncate the decimal part by multiplying, truncating, and then dividing
    var truncatedNum = Math.trunc(num * multiplier) / multiplier;
    
    return truncatedNum;
}

// Example usage:
var num = 3.141592653589793;
var decimals = 3;

console.log(truncateDecimal(num, decimals)); // Output: 3.141


// Q5
function formatNumber(num, decimalPlaces) {
    // Check if num is not a valid number
    if (isNaN(num) || !isFinite(num)) {
        return "Invalid input";
    }
    
    // Convert num to a string with the specified number of decimal places
    var formattedNum = Number(num).toFixed(decimalPlaces);
    
    return formattedNum;
}

// Example usage:
var num1 = 123.456789;
var num2 = "Hello";
var decimalPlaces = 2;

console.log(formatNumber(num1, decimalPlaces)); // Output: "123.46"
console.log(formatNumber(num2, decimalPlaces)); // Output: "Invalid input"
