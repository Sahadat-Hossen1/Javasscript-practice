// give me some intermidiate and advace and also hard levele tast about reduce about 30 to 40 qs

/* 
const numbers = [1, 22, 39, 47, 56];

const sum = numbers.reduce((acc, curr,arr) =>{
    const data=acc+curr;
    return data
    
},0);
const sum=numbers.reduce((curr,acc)=>{
    console.log(`curr:${curr}`);
    console.log(acc);
    
})
console.log("=====");

//
const sum2=numbers.reduce((acc,curr)=>{
    console.log(acc);
    console.log(`curr:${curr}`);
    
})
console.log(sum); // 15
*/
// beginner practice task without solutions

// চমৎকার 👍
// নিচে JavaScript reduce() – Beginner level practice tasks দিচ্ছি
// 👉 কোনো solution নেই (নিজে ট্রাই করবে)

// 🟢 Beginner Reduce Practice Tasks (No Solution)
// 🧩 Task 1: Sum of numbers
// const nums = [1, 2, 3, 4, 5];
//  const result=nums.reduce((acc,curr)=>acc+curr,0)
//  console.log(result);

// 👉 reduce() ব্যবহার করে সব সংখ্যার যোগফল বের করো।

// 🧩 Task 2: Multiply all numbers
// const nums = [2, 3, 4];
// const result=nums.reduce((acc,curr)=>{
//    return acc*curr
// },1)
// console.log(result);

// 👉 সব সংখ্যার গুণফল বের করো।

// 🧩 Task 3: Find maximum number
// const nums = [5, 12, 8, 20, 3];
// const result=nums.reduce((acc,curr)=>{
//   return curr > acc ? curr :acc;
// },nums[0])
// console.log(result);
// 👉 সবচেয়ে বড় সংখ্যাটা বের করো।

// 🧩 Task 4: Count total elements
// const items = ["a", "b", "c", "d"];
// const result=items.reduce((acc,curr)=>acc+1,0)
// console.log(result);
// 👉 array-তে কয়টা element আছে সেটা reduce() দিয়ে বের করো
// ⚠️ .length ব্যবহার করা যাবে না।

// 🧩 Task 5: Count occurrences
// const colors = ["red", "blue", "red", "green", "blue", "red"];
// const result=colors.reduce((acc,curr)=>{
//     acc[curr]=(acc[curr]||0)+1
//     return  acc
// },{})
// console.log(result);

// 👉 প্রতিটা color কয়বার এসেছে সেটা object আকারে বের করো।

// 🧩 Task 6: Sum of even numbers
// const nums = [1, 2, 3, 4, 5, 6];
// const result=nums.reduce((acc,curr)=>{
   //both way is right
    // if(curr % 2===0){ 
    //     return  acc+curr
    // }
    // return acc
    // return acc+( curr %2 === 0 && curr)
// },0)
// console.log(result);
// 👉 শুধু even সংখ্যাগুলোর যোগফল বের করো।

// 🧩 Task 7: Convert array to object
// const users = ["rahim", "karim", "salma"];

// 👉 output এমন বানাও:

// {
//   rahim: true,
//   karim: true,
//   salma: true
// }

// 🧩 Task 8: Total price
// const cart = [
//   { name: "pen", price: 10 },
//   { name: "book", price: 50 },
//   { name: "bag", price: 100 }
// ];
//  const result=cart.reduce((acc,curr)=> acc+curr.price,0)
//  console.log(result);
 
// 👉 সব product-এর মোট দাম বের করো।

// 🧩 Task 9: Flatten array
// const arr = [[1, 2], [3], [4, 5]];
// console.log(arr.flat(Infinity));
// console.log(arr.flatMap(n=>n));
// const result=arr.reduce((acc,curr)=>{
//     return acc.concat(curr)
// },[])
// console.log(result);
// 👉 একে flat array বানাও [1,2,3,4,5]

// 🧩 Task 10: String join
const letters = ["J", "S", "R", "E", "D", "U", "C", "E"];
const JSREDUCE=letters.reduce((acc,curr)=>acc.concat(curr),'')
console.log(JSREDUCE);


// 👉 reduce() ব্যবহার করে "JSREDUCE" বানাও।
