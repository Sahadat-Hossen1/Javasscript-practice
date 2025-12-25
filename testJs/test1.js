// 1️⃣ Execution Context

// JavaScript কোড চালানোর সময় একটি environment তৈরি করে

// এতে থাকে:

// Variable Environment

// Lexical Environment

// this

// ✅ 2️⃣ Creation Phase & Execution Phase

// Creation Phase → memory allocate হয়

// Execution Phase → line by line code চলে

// ✅ 3️⃣ Variable Environment vs Lexical Environment

// Variable Environment → var, function declaration

// Lexical Environment → let, const, block scope

// ✅ 4️⃣ Call Stack

// Execution Context রাখার জায়গা

// নিয়ম: Last In, First Out (LIFO)

// ✅ 5️⃣ Scope Chain

// variable খোঁজার পথ:

// local → outer → global

// ✅ 6️⃣ Hoisting

// declaration উপরে ওঠে (value নয়)

// Creation Phase-এ হয়

// ✅ 7️⃣ var / let / const

// var → hoisted, value = undefined

// let → hoisted, কিন্তু TDZ

// const → hoisted, কিন্তু TDZ + reassign নয়

// ✅ 8️⃣ Function Hoisting

// Function declaration → পুরো hoist হয় ✅

// Function expression / arrow function → hoist হয় না ❌

// ✅ 9️⃣ TDZ (Temporal Dead Zone)

// let / const assign হওয়ার আগ পর্যন্ত access করা যায় না

// ✅ 🔟 Error পার্থক্য

// undefined → var

// ReferenceError → let / const

// not a function → var function expression

/////

hello();

function hello() {
  console.log("Hello");
}
// func();

// const func=()=>{
//     let x="hello"
//   console.log(x);
// }

//////
// let x=[]
// console.log(x);
// x=[2,3]



//////
// let x;
// console.log(x);
// x=5;

/////
// console.log(a);

// var a = 10;

// function foo() {
//   console.log(b);
//   var b = 20;
// }

// foo();

//////////


// function first() {
// //  return ()=> second(thered());
// return ()=>thered(second())
// }

// function second() {
//   console.log("Hello");
// }
// function thered(){
//     console.log("hello")
// }
// first()();
///////////
//dead zoon example
// console.log(x)
// let x=5;