/**
 * Examples of different types of array methods in JavaScript
 */

// 1. Iteration methods
const arr = [1, 2, 3, 4, 5];

/**
"forEach is great for iterating over arrays where you want to perform a side-effect like logging or modifying items.
 But if you need to break early or collect transformed results, map, filter, or for...of are better choices."
 * 
 */
arr.forEach(item => console.log(item)); // forEach


/**
 * map() creates a new array by transforming every element of the original array using the provided callback function.
 */
const doubled = arr.map(item => item * 2); // map

const evens = arr.filter(item => item % 2 === 0); // filter

const sum = arr.reduce((acc, curr) => acc + curr, 0); // reduce

const found = arr.find(item => item > 3); // find

const index = arr.findIndex(item => item === 3); // findIndex

// 2. Modification methods
arr.push(6); // push
arr.pop(); // pop
arr.shift(); // shift
arr.unshift(0); // unshift
arr.splice(2, 1, 99); // splice

// 3. Accessor methods
const sliced = arr.slice(1, 3); // slice
const joined = arr.join('-'); // join
const includesThree = arr.includes(3); // includes
const indexOfThree = arr.indexOf(3); // indexOf
const lastIndex = arr.lastIndexOf(3); // lastIndexOf

// 4. Sorting and reversing
const sorted = arr.slice().sort((a, b) => a - b); // sort
const reversed = arr.slice().reverse(); // reverse

// 5. Other utility methods
const isArray = Array.isArray(arr); // isArray
const flatArr = [1, [2, 3]].flat(); // flat
const flatMapped = arr.flatMap(x => [x, x * 2]); // flatMap