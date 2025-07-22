// --------------------------
// 🧵 JavaScript String Manipulations
// --------------------------

let str = "  Hello, World!  ";

// 🔠 1. Convert Case
console.log(str.toUpperCase());      // "  HELLO, WORLD!  "
console.log(str.toLowerCase());      // "  hello, world!  "

// ✂️ 2. Trim Whitespace
console.log(str.trim());             // "Hello, World!"
console.log(str.trimStart());        // "Hello, World!  "
console.log(str.trimEnd());          // "  Hello, World!"

// ➕ 3. Concatenate Strings
let first = "Hello";
let second = "World";
console.log(first + " " + second);   // "Hello World"
console.log(`${first} ${second}`);   // "Hello World"

// 🔍 4. Search Within a String
console.log(str.includes("World"));  // true
console.log(str.indexOf("o"));       // 4
console.log(str.lastIndexOf("o"));   // 8
console.log(str.startsWith("  He")); // true
console.log(str.endsWith("!  "));    // true

// 🧩 5. Extract Substrings
console.log(str.slice(2, 7));        // "Hello"
console.log(str.substring(2, 7));    // "Hello"

// 🔄 6. Replace Text
console.log(str.replace("World", "Universe")); // "  Hello, Universe!  "
console.log(str.replaceAll(" ", "_"));         // "__Hello,_World!__"

// 📦 7. Split into Array
let csv = "red,green,blue";
console.log(csv.split(","));         // ["red", "green", "blue"]

// 🔁 8. Repeat Strings
console.log("ha".repeat(3));         // "hahaha"

// 🧱 9. Pad Strings
console.log("5".padStart(3, "0"));   // "005"
console.log("5".padEnd(3, "0"));     // "500"

// 🧪 10. Match Patterns (Regex)
let sentence = "I like JavaScript!";
console.log(sentence.match(/a/g));   // ['a', 'a']
console.log(sentence.search("Java")); // 7

// 🧼 11. Convert to String
let num = 123;
console.log(String(num));            // "123"
console.log(num.toString());         // "123"

// 🔧 12. Reverse a String
let name = "shashi";
let reversed = name.split("").reverse().join("");
console.log(reversed);               // "ihsahs"
