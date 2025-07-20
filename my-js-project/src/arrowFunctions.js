/**
 * Arrow functions are a concise syntax for writing functions in JavaScript.
 * They use the `=>` syntax and do not have their own `this`, `arguments`, `super`, or `new.target`.
 * Arrow functions are often used for short, inline functions and callbacks.
 *
 * @example
 * // Traditional function expression:
 * const add = function(a, b) {
 *   return a + b;
 * };
 * // Arrow function equivalent:
 * const add = (a, b) => a + b;
 *console.log(add(2, 3)); // Output: 5
 * 
 * 
 * @example
 * // Arrow function with a single parameter (parentheses can be omitted):
 * const square = x => x * x;
 *
 * @example
 * // Arrow function returning an object (wrap object in parentheses):
 * const createUser = (name, age) => ({ name, age });
 *
 * @example
 * // Arrow function used as a callback:
 * const numbers = [1, 2, 3];
 * const doubled = numbers.map(n => n * 2);
 *
 * @example
 * // Arrow function with no parameters (use empty parentheses):
 * const getRandom = () => Math.random();
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions|MDN: Arrow functions}
 */

/**
 * Differences between arrow functions and normal (traditional) functions:
 *
 * 1. Syntax:
 *    - Arrow functions use the `=>` syntax and are often more concise.
 *    - Traditional functions use the `function` keyword.
 *
 * 2. `this` Binding:
 *    - Arrow functions do not have their own `this`; they inherit `this` from the enclosing scope.
 *    - Traditional functions have their own `this` depending on how they are called.
 *
 * 3. `arguments` Object:
 *    - Arrow functions do not have their own `arguments` object.
 *    - Traditional functions have access to the `arguments` object.
 *
 * 4. Usage as Constructors:
 *    - Arrow functions cannot be used as constructors and will throw an error if used with `new`.
 *    - Traditional functions can be used as constructors.
 *
 * 5. Methods:
 *    - Arrow functions are not suitable as object methods when `this` is needed.
 *    - Traditional functions are commonly used as object methods.
 */