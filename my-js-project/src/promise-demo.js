// This file demonstrates how JavaScript Promises work.

function asyncTask(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Task completed successfully!");
            } else {
                reject("Task failed!");
            }
        }, 500);
    });
}

console.log("Starting async task...");

const result = await asyncTask(false)
    .then(result => {
        console.log("Promise resolved:", result);
        debugger; // Pause here to inspect resolved value
        return true;
    })
    .catch(error => {
        console.log("Promise rejected:", error);
        debugger; // Pause here to inspect error
        return false;
    });

console.log("Async task finished.", result);