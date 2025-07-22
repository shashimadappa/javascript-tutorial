// [ Call Stack ]
//       ↓
// [ process.nextTick Queue ] <-- microtask queue
//       ↓
// [ Other Microtasks (e.g., Promises) ]
//       ↓
// [ Timers (setTimeout, setInterval) ]
//       ↓
// [ I/O callbacks ]
//       ↓
// [ setImmediate Queue ]
// -------------------------------------------------------------------------------------------------------------------
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("process.nextTick");
});

console.log("End");
// Start
// End
// process.nextTick
// setTimeout
// setImmediate

// ----------------------------------------------------------------------------------------------------------------------


console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 5000); 

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("process.nextTick");
});

console.log("End");
// Start
// End
// process.nextTick
// setImmediate
// (setTimeout after 5 seconds)
// setTimeout

// ----------------------------------------------------------------------------------------------------------

