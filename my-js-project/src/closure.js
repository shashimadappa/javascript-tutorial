// A closure is a function that "remembers" the variables from its outer (enclosing) scope,
// even after that outer function has finished executing.

function makeCounter() {
    debugger
    let count = 0; // 'count' is a local variable created by makeCounter

    // The inner function forms a closure.
    // It can access 'count' even after makeCounter has finished.
    return function() {
        count++;
        return count;
    };
}

const counter1 = makeCounter(); // Creates a new closure with its own 'count'
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = makeCounter(); // Creates another closure with a separate 'count'
console.log(counter2()); // 1

// Explanation:
// Each time you call makeCounter(), a new 'count' variable is created.
// The returned function "remembers" this variable, forming a closure.
// So counter1 and counter2 have their own independent