/**
 * Hoisting is a JavaScript mechanism where variable and function declarations
 * are moved to the top of their containing scope during the compilation phase.
 * This means that variables and functions can be used before they are declared
 * in the code. However, only the declarations are hoisted, not the initializations.
 */

//  What is Hoisting in JavaScript?
// Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before the code is executed.
// This means variables (var) and functions can appear to be used before they are declared in the code.
//  Follow it up with:
// Function declarations are fully hoisted — both their name and body — so they can be called before they are defined.
// Function expressions and arrow functions are not hoisted in the same way. Only the variable is hoisted (as undefined), so calling them before declaration throws an error.

// ✅ Example 1: Function Declaration is Hoisted
sayHello(); // ✅ Works
function sayHello() {
  console.log("Hello from hoisted function!");
}
// Why?
// Because function declarations are hoisted with their entire definition.


// ❌ Example 2: Function Expression is NOT Hoisted
sayHi(); // ❌ TypeError: sayHi is not a function
const sayHi = function () {
  console.log("Hi there!");
};
// Why?
// Only the variable sayHi is hoisted (as undefined), not the function itself.


// ❌ Example 3: Arrow Function is NOT Hoisted
greet(); // ❌ TypeError: greet is not a function
const greet = () => {
  console.log("Greetings!");
};
// Same as function expressions — only greet is hoisted as undefined.


// 🧪 Deep Dive: Function vs Var Hoisting
console.log(add(2, 3)); // ✅ 5
console.log(x);         // ✅ undefined
function add(a, b) {
  return a + b;
}
var x = 10;
// Explanation:
// add() is hoisted with its body — usable before definition
// x is hoisted as undefined, then gets value 10 during execution
