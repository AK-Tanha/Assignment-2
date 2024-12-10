// 1. Function to calculate difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 5)); // Example usage

// 2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is Odd:", isOdd(3)); // Example usage

// 3. Function to find the smallest number in an array
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Minimum:", findMin([3, 1, 4, 1, 5, 9])); // Example usage

// 4. Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Example usage

// 5. Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
console.log("Sorted Descending:", sortArrayDescending([3, 1, 4, 1, 5, 9])); // Example usage

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercased First Letter:", lowercaseFirstLetter("Hello World")); // Example usage

// 7. Function to find the average of an array of numbers
function findAverage(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
console.log("Average:", findAverage([10, 20, 30, 40])); // Example usage

// 8. Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("Is Leap Year:", isLeapYear(2024)); // Example usage
