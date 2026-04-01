// Intermediate Reduce Tasks (With Output, No Solution)
// 🧩 Task 1: Sum of even numbers
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const result=nums.reduce((acc,curr)=>acc+(curr % 2===0&& curr) ,0)
// console.log(result);
// 👉 Expected Output
// 20
// 🧩 Task 2: Remove duplicates  
// const nums = [1, 2, 2, 3, 4, 4, 5];
// const result=nums.reduce((acc,curr)=>{
// },[])
// 👉 Expected Output
// [1, 2, 3, 4, 5]
// 🧩 Task 3: Group users by role
const users = [
  { name: "Rahim", role: "admin" },
  { name: "Karim", role: "user" },
  { name: "Salma", role: "admin" }
];
// const output=users.reduce((acc,curr)=>{
//     console.log(acc);
//     console.log(curr);
    
    
// },{})
// 👉 Expected Output
// {
//   admin: [
//     { name: "Rahim", role: "admin" },
//     { name: "Salma", role: "admin" }
//   ],
//   user: [
//     { name: "Karim", role: "user" }
//   ]
// }

// 🧩 Task 4: Count words (string → object)
// const sentence = "reduce is very powerful reduce is fun";


// 👉 Expected Output

// {
//   reduce: 2,
//   is: 2,
//   very: 1,
//   powerful: 1,
//   fun: 1
// }

// 🧩 Task 5: Flatten array (1 level)
const arr = [1, [2, 3], [4, 5], 6];
// console.log(arr.reduce((acc,curr)=>acc.concat(curr),[]));
// 👉 Expected Output
// [1, 2, 3, 4, 5, 6]
// 🧩 Task 6: Total price by category
// const products = [
//   { name: "pen", category: "stationary", price: 10 },
//   { name: "book", category: "stationary", price: 50 },
//   { name: "shirt", category: "clothing", price: 200 }
// ];

// 👉 Expected Output
// {
//   stationary: 60,
//   clothing: 200
// }

// 🧩 Task 7: Convert array to object
// const fruits = ["apple", "banana", "orange"];


// 👉 Expected Output

// {
//   apple: true,
//   banana: true,
//   orange: true
// }

// 🧩 Task 8: Find longest word
// const words = ["reduce", "is", "awesome", "powerful"];



// 👉 Expected Output

// "powerful"

// 🧩 Task 9: Count truthy values
// const values = [true, false, 1, 0, "hi", "", null];


// 👉 Expected Output

// 3

// 🧩 Task 10: Build sentence
// const words = ["reduce", "makes", "js", "powerful"];


// 👉 Expected Output

// "reduce makes js powerful"
console.log(typeof[]);
