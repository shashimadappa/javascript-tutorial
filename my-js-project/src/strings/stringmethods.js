// --------------------------
// 🧵 JavaScript String Methods Cheat Sheet
// --------------------------

const str = " Hello, JavaScript! ";

// 🔤 Length
console.log(str.length); // 20

// ✂️ Trimming
console.log(str.trim());          // "Hello, JavaScript!"
console.log(str.trimStart());     // "Hello, JavaScript! "
console.log(str.trimEnd());       // " Hello, JavaScript!"

// 🔍 Searching
console.log(str.includes("Java"));  // true
console.log(str.startsWith(" H"));  // true
console.log(str.endsWith("! "));    // true
console.log(str.indexOf("Java"));   // 8
console.log(str.lastIndexOf("a"));  // 13

// 🔄 Replacing
console.log(str.replace("JavaScript", "World")); // " Hello, World! "
console.log(str.replaceAll(" ", "_"));           // "_Hello,_JavaScript!_"

// 🧩 Slicing
console.log(str.slice(1, 6));       // "Hello"
console.log(str.slice(-6));         // "ipt! "

// 📦 Splitting
console.log(str.split(","));        // [" Hello", " JavaScript! "]
console.log("a-b-c".split("-"));    // ["a", "b", "c"]

// 🔠 Changing Case
console.log(str.toUpperCase());     // " HELLO, JAVASCRIPT! "
console.log(str.toLowerCase());     // " hello, javascript! "

// 🧪 Matching (Regex)
console.log(str.match(/[A-Z]/g));   // ['H', 'J']
console.log(str.search("Java"));    // 8

// 🧱 Padding
console.log("5".padStart(3, "0"));  // "005"
console.log("5".padEnd(3, "0"));    // "500"

// 🔁 Repeating
console.log("ha".repeat(3));        // "hahaha"

// 🧼 Converting
console.log(String(123));           // "123"
console.log((123).toString());      // "123"

// 🔁 Template Literals (not a method but useful)
const name = "Shashi";
console.log(`Hello, ${name}!`);     // "Hello, Shashi!"
