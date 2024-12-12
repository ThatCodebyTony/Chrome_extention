// math.js

// A simple function to add two numbers
export function add(a, b) {
    return a + b;
}

// You can also export variables
export const pi = 3.14159;

//-----------------------------------------------

// main.js

// Import the add function and pi constant from math.js
import { add, pi } from './math.js';

console.log(add(2, 3)); // Output: 5
console.log(pi);        // Output: 3.14159
