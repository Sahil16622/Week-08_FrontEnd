// Generate 5 random 3-digit values
let num1 = Math.floor(Math.random() * 900) + 100;
let num2 = Math.floor(Math.random() * 900) + 100;
let num3 = Math.floor(Math.random() * 900) + 100;
let num4 = Math.floor(Math.random() * 900) + 100;
let num5 = Math.floor(Math.random() * 900) + 100;

console.log("Generated numbers:", num1, num2, num3, num4, num5);

// Find the minimum value
let min = Math.min(num1, num2, num3, num4, num5);

// Find the maximum value
let max = Math.max(num1, num2, num3, num4, num5);

console.log("Minimum value:", min);
console.log("Maximum value:", max);