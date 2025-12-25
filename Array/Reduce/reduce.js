//for global i want to use
var arr,result;
// 🟢 Task 1: Sum (যোগফল)

// একটি number array দেওয়া আছে:
//   arr=[12, 5, 30, 18, 7]
//   result=arr.reduce((acc,cur)=>acc+cur,0)
//   console.log(result);
// 👉 reduce() ব্যবহার করে সব সংখ্যার যোগফল বের করুন।

// ✅ Expected Result
// 72

// 🟢 Task 2: Product (গুণফল)

// একটি number array দেওয়া আছে:

// arr=[2, 3, 4]
// result=arr.reduce((acc,cur)=>acc*cur,1)
// console.log(result);
// 👉 reduce() ব্যবহার করে সব সংখ্যার গুণফল বের করুন।

// ✅ Expected Result
// 24

// 🟡 Task 3: Count frequency (কতবার এসেছে)

// একটি string array দেওয়া আছে:

// arr=["apple", "banana", "apple", "mango", "banana"]
// result=arr.reduce((acc,cur)=>{
    
//     acc[cur]=(acc[cur] || 0)+1
//     return acc;
// },{})
// console.log(result);

// 👉 reduce() ব্যবহার করে প্রতিটি item কতবার এসেছে তা object আকারে বের করুন।

// ✅ Expected Result
// {
//   apple: 2,
//   banana: 2,
//   mango: 1
// }

// 🟡 Task 4: Maximum value (সবচেয়ে বড় সংখ্যা)

// একটি number array দেওয়া আছে:

// arr=[12, 5, 30, 18, 7]

// result=arr.reduce((acc,cur)=>{
    
//     if(cur>acc){
//         return cur
//     }
//     return acc;
// },)
// console.log(result);
// 👉 reduce() ব্যবহার করে সবচেয়ে বড় সংখ্যাটি বের করুন।

// ✅ Expected Result
// 30

// 🟡 Task 5: Remove duplicates (duplicate বাদ)

// একটি number array দেওয়া আছে:

// arr=[1, 2, 2, 3, 4, 4, 5]


// result=arr.reduce((acc,cur)=>{
    
//     if(!acc.includes(cur)){
//          acc.push(cur)
//     }
//     return acc;
// },[])
// console.log(result);
// 👉 reduce() ব্যবহার করে duplicate বাদ দিয়ে নতুন array তৈরি করুন।

// ✅ Expected Result
// [1, 2, 3, 4, 5]

// 🟡 Task 6: Total price (কার্টের মোট দাম)

// একটি cart array দেওয়া আছে:

// arr=[
//   { name: "pen", price: 10 },
//   { name: "book", price: 50 },
//   { name: "pencil", price: 5 }
// ]
// result=arr.reduce((acc,cur)=>acc + cur.price,0)
// console.log(result);



// 👉 reduce() ব্যবহার করে মোট price বের করুন।

// ✅ Expected Result
// 65

// 🟡 Task 7: Group by property (property অনুযায়ী ভাগ)

// একটি user array দেওয়া আছে:

// arr=[
//   { name: "A", role: "admin" },
//   { name: "B", role: "user" },
//   { name: "C", role: "admin" }
// ]
// result=arr.reduce((acc,cur)=>{

// },[])


// 👉 reduce() ব্যবহার করে role অনুযায়ী users group করুন (object আকারে)।

// ✅ Expected Result
// {
//   admin: [
//     { name: "A", role: "admin" },
//     { name: "C", role: "admin" }
//   ],
//   user: [
//     { name: "B", role: "user" }
//   ]
// }

// 🔵 Task 8: Flatten array (nested array flat করা)

// একটি nested array দেওয়া আছে:

// arr=[[1, 2], [3, 4], [5, 6]]
// result=arr.reduce((acc,cur)=>acc.concat(cur),[])
// console.log(result);
// 👉 reduce() ব্যবহার করে একটি flat array তৈরি করুন।
// ✅ Expected Result
// [1, 2, 3, 4, 5, 6]

// 🔵 Task 9: Boolean check (সব even কিনা)

// একটি number array দেওয়া আছে:

// arr=[2, 4, 6, 8]
// result=arr.reduce((acc,cur)=>{
//     if(cur %2===0){
//         return true
//     }
//     return acc
// })
// console.log(result);



// 👉 reduce() ব্যবহার করে চেক করুন সব সংখ্যাই even কিনা।

// ✅ Expected Result
// true

// 🔵 Task 10: Transform to object (array → object)

// একটি string array দেওয়া আছে:

arr= ["a", "b", "c"]
result=arr.reduce((acc,cur)=>{
    console.log(acc);
    console.log(cur);
    
    
},{})


// 👉 reduce() ব্যবহার করে নিচের মতো object তৈরি করুন।

// ✅ Expected Result
// {
//   a: true,
//   b: true,
//   c: true
// }

// 🧠 Practice Reminder

// acc এর type আগে ঠিক করুন

// initial value ভুলবেন না

// return acc অবশ্যই করবেন


/****** */

// make a new  array for this array and ignore dublicates proudct id 
// const checkouts = [
//   { userId: 1, productId: 101, name: "Laptop" },
//   { userId: 1, productId: 102, name: "Mouse" },
//   { userId: 1, productId: 101, name: "Laptop" },
//   { userId: 1, productId: 103, name: "Keyboard" },
//   { userId: 1, productId: 102, name: "Mouse" },
// ];
// const unicCheckout=checkouts.reduce((acc,cur)=>{
//     const exits=acc.some(item=>item.productId=== cur.productId)
//      if (!exits) {
//         acc.push(cur)
//      }    
//     return acc
// },[])
// console.log(unicCheckout);
// Task 7, 9, 10 শুধু hint দিয়ে solve করানো
// 2️⃣ Same tasks → for loop vs reduce comparison
// 3️⃣ Advanced reduce (grouping + chaining)
// 4️⃣ Mini project (cart, vote system, dashboard)