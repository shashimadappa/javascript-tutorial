// --------------------------
// 🔧 Array Manipulation Cheat Sheet
// --------------------------

// 1️⃣ Adding Elements
const arr1 = [1, 2];
arr1.push(3);             // ➕ adds to end → [1, 2, 3]
arr1.unshift(0);          // ➕ adds to start → [0, 1, 2, 3]

// 2️⃣ Removing Elements
arr1.pop();               // ➖ removes last → [0, 1, 2]
arr1.shift();             // ➖ removes first → [1, 2]

// 3️⃣ Searching Elements
console.log(arr1.includes(2)); // 🔍 true
console.log(arr1.indexOf(2));  // 🔍 index 1 or -1 if not found

const users = [{ id: 1 }, { id: 2 }];
const foundUser = users.find(u => u.id === 2); // 🔎 { id: 2 }

// 4️⃣ Transforming Items (map)
const nums = [1, 2, 3];
const squared = nums.map(n => n * n);          // 🔁 [1, 4, 9]

// 5️⃣ Filtering Items
const evens = nums.filter(n => n % 2 === 0);   // 🔍 [2]

// 6️⃣ Looping (forEach)
const fruits = ['apple', 'banana'];
fruits.forEach(fruit => console.log(fruit));   // 🍎 🍌

// 7️⃣ Combining Arrays
const a = [1, 2];
const b = [3, 4];
const combined1 = a.concat(b);                 // 📦 [1, 2, 3, 4]
const combined2 = [...a, ...b];                // 📦 same using spread

// 8️⃣ Slicing & Splicing
const arr2 = [10, 20, 30, 40];
const sliced = arr2.slice(1, 3);               // ✂️ [20, 30] — non-destructive
arr2.splice(1, 2);                              // 🧨 removes 20, 30 → [10, 40]

// 9️⃣ Sorting
const unsorted = [3, 1, 4, 2];
unsorted.sort();                                // ⚠️ [1, 2, 3, 4] — lexicographic by default
unsorted.sort((a, b) => a - b);                 // ✅ true numeric sort

// 🔟 Reducing
const sum = nums.reduce((acc, cur) => acc + cur, 0); // ➕ 6

// 🆓 Bonus Tricks:

// Remove duplicates
const dupes = [1, 2, 2, 3];
const unique = [...new Set(dupes)];             // ❌ duplicates gone → [1, 2, 3]

// Reverse
const reversed = [...nums].reverse();           // 🔄 [3, 2, 1]

// Flatten nested arrays
const nested = [1, [2, 3], [4, 5]];
const flat = nested.flat();                     // 🪣 [1, 2, 3, 4, 5]

// Flatten deep nested arrays
const deeplyNested = [1, [2, [3, [4]]]];
const deeplyFlat = deeplyNested.flat(Infinity); // 🪣 [1, 2, 3, 4]
