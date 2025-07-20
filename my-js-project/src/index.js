// This file contains JavaScript code and includes a debugger statement for debugging purposes.

function main() {
    console.log("Starting the application...");
    debugger; // Execution will pause here for debugging
    console.log("Application is running.");
}

function makeCounter() {
    let count = 0;

    return function() {
        return count++; // Remembers `count` due to lexical scoping
    };
}

const counter = makeCounter();
console.log(counter()); // 0
debugger; // Execution will pause here

main();