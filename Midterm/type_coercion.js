// Example 1: Adding a Number to a String
let result1 = 2 + "2"; // The number 2 is coerced into a string, result is "22"
console.log(result1); // Output: "22"

// Example 2: Adding a String to a Number
let result2 = "5" + 3; // The number 3 is coerced into a string, result is "53"
console.log(result2); // Output: "53"

// Example 3: Subtraction with a String
let result3 = "10" - 5; // The string "10" is coerced into a number, result is 5
console.log(result3); // Output: 5

// Example 4: Equality Comparison with Type Coercion (==)
let result4 = "5" == 5; // The string "5" is coerced into a number, result is true
console.log(result4); // Output: true

// Example 5: Strict Equality Comparison (===)
let result5 = "5" === 5; // No coercion, different types (string vs. number), result is false
console.log(result5); // Output: false

// Example 6: Implicit Conversion in an if Statement
let result6 = "0"; // Non-empty string, considered truthy
if (result6) {
    console.log("Truthy!"); // This will be printed
} else {
    console.log("Falsy!");
}
