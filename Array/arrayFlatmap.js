// give me some intermidiate and advace and also hard levele tast about flatmap
// ADVANCED flatMap PRACTICE TASKS
// 🧠 Task 1: Nested Orders Explosion
const orders = [
  {
    orderId: 1,
    items: [
      { name: "Phone", qty: 2 },
      { name: "Charger", qty: 1 },
    ],
  },
  {
    orderId: 2,
    items: [{ name: "Laptop", qty: 1 }],
  },
];
const outPut = orders.flatMap((curentValue, index) => {
  const data = curentValue.items.map((item) => ({
    orderId:curentValue.orderId,
    name: item.name,
    qty: item.qty,
  }));
  return data
});
// console.log(outPut);

// ✅ Output format:
// [
//   { orderId: 1, name: "Phone", qty: 2 },
//   { orderId: 1, name: "Charger", qty: 1 },
//   { orderId: 2, name: "Laptop", qty: 1 }
// ]

// 🧠 Task 2: Remove Invalid & Flatten
const data = [[1, 2], null, [3, 4], undefined, [], [5]];
const result1=data.flatMap((item)=> item?item:[])
// console.log(result1);

// 🎯 Rules:

// null / undefined ignore

// final result → flat array

// 🧠 Task 3: Permission Matrix
const roles = [
  { role: "admin", permissions: ["read", "write", "delete"] },
  { role: "user", permissions: ["read"] },
];
// const test=roles.flatMap((item)=>item.permissions.map(per=>`${item.role}-${per}`))
// console.log(test);

// 🎯 Create output:

// [
//   "admin-read",
//   "admin-write",
//   "admin-delete",
//   "user-read"
// ]

// 🧠 Task 4: Search Index Builder
const posts = [
  { id: 1, title: "Learn JavaScript Fast" },
  { id: 2, title: "Master React Today" },
];
const test2 = posts.flatMap((item) => {
  const words = item.title.split(" ");
  return words.map((word) => {
    return {
      word,
      postId: item.id,
    };
  });
});
// console.log(test2)
// 🎯 Output:
// [
//   { word: "learn", postId: 1 },
//   { word: "javascript", postId: 1 },
//   { word: "fast", postId: 1 },
//   { word: "master", postId: 2 },
//   { word: "react", postId: 2 },
//   { word: "today", postId: 2 }
// ]

// 🧠 Task 5: Conditional Expand
const numbers = [1, 2, 3, 4, 5];
//need ai to solve
const result = numbers.flatMap((n) => {
  return n %2 ===0 ?[n,n*2]:[]
});
 console.log(result);
// 🎯 Rules:

// Even number → [n, n * 2]

// Odd number → ignore

// 🧠 Task 6: Deep API Normalization
//need ai
const apiResponse = [
  {
    category: "Tech",
    products: [
      { name: "Phone", price: 500 },
      { name: "Laptop", price: 1200 },
    ],
  },
  {
    category: "Home",
    products: [{ name: "Fan", price: 100 }],
  },
];
const apiR = apiResponse.flatMap((curentValue) => {
  const category = curentValue.category;
  const data = curentValue.products;
  return data.map((item) => ({
    category,
    name: item.name,
    price: item.price,
  }));
});
//  console.log(apiR);

// 🎯 Output:
// [
//   { category: "Tech", name: "Phone", price: 500 },
//   { category: "Tech", name: "Laptop", price: 1200 },
//   { category: "Home", name: "Fan", price: 100 }
// ]

// 🧠 Task 7: Chat Message Parser
const messages = ["hello how are you", "i am fine"];
const singleMessages = messages.flatMap((wr, i) => {
  const w = wr.split(" ");
  // console.log(w);
  return w.map((item) => ({
    word: item,
    index: i,
  }));
});
// console.log(singleMessages);

// 🎯 Output:

// [
//   { word: "hello", index: 0 },
//   { word: "how", index: 0 },
//   { word: "are", index: 0 },
//   { word: "you", index: 0 },
//   { word: "i", index: 1 },
//   { word: "am", index: 1 },
//   { word: "fine", index: 1 }
// ]

// 🧠 Task 8: Cart Quantity Explosion
const cart = [
  { name: "Pen", qty: 3 },
  { name: "Book", qty: 2 },
];

const cartResult = cart.flatMap((c) => Array(c.qty).fill(c.name));
// console.log(cartResult);

// 🎯 Output:

// ["Pen", "Pen", "Pen", "Book", "Book"]
