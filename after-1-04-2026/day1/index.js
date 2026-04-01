// Nice 🔥 practice time! I’ll give you 10 array problems (no solutions) — from intermediate → advanced level, just like you want.

// 🧠 Array Practice Problems (No Solution)
// 1. Total Price Calculation

// You have an array of products:

const products = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 1 },
  { name: "Shoes", price: 1200, quantity: 1 },
];
let sum = 0;
for (let i = 0; i < products.length; i++) {
  sum += products[i].price;
}
// console.log(sum);
// 👉 Calculate the total cost of all products.

// 2. Filter Expensive Products
// From the same products array:
// 👉 Return only products where price > 700
// for(let i=0;i<products.length;i++){
// if(products[i].price>700){
//     console.log(products[i]);

// }
// }

// 3. Get All Product Names

// 👉 Create a new array that contains only product names
// let newArr=[]
// for (let index = 0; index < products.length; index++) {
// //  console.log(products[index]);
// newArr.push(products[index].name)

// }
// console.log(newArr);

// 4. Find Specific Product

// 👉 Find the product where name === "Shoes"
for (let i = 0; i < products.length; i++) {
  if (products[i].name === "Shoes") {
    // console.log(products[i]);
  }
}
// 5. Count Completed Tasks
const tasks = [
  { title: "Learn JS", completed: true },
  { title: "Practice", completed: false },
  { title: "Build Project", completed: true },
];

// 👉 Count how many tasks are completed
let complete = 0;
let uncomplete = 0;
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].completed === true) {
    // console.log(tasks[i]);
    complete = complete + 1;
  }else{
    uncomplete=uncomplete+1
  }
  
}
// console.log("complete:" + complete +":"+"uncompl :"+uncomplete);

// 6. Remove Duplicate Numbers
const numbers = [1, 2, 2, 3, 4, 4, 5];

// 👉 Return a new array with unique values only
let unic_number_array=[]
for (let index = 0; index < numbers.length; index++) {
    
}
// 7. Group Users by Age
// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 25 },
//   { name: "C", age: 20 }
// ];

// 👉 Group users like:

// {
//   20: [...],
//   25: [...]
// }
// 8. Sort by Price (Descending)

// 👉 Sort products array by price high → low

// 9. Flatten Nested Array
// const arr = [1, [2, 3], [4, [5, 6]]];

// 👉 Convert into:

// [1, 2, 3, 4, 5, 6]
// 10. Find Highest Salary
// const employees = [
//   { name: "John", salary: 5000 },
//   { name: "Jane", salary: 7000 },
//   { name: "Doe", salary: 6000 }
// ];

// 👉 Find the employee with the highest salary

// If you want, I can:
// ✅ Check your solutions
// ✅ Give hints only (no full solution)
// ✅ Or make real-world mini project tasks

// Just tell me 👍
